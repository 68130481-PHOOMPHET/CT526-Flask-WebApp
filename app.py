from flask import Flask, render_template, request, make_response

app = Flask(__name__)

def myfunc(character, times):
  return character * times

# --- Routes ---

@app.route("/")
def home():
  """
  แก้ไขตรงนี้: ให้หน้าแรก (/) เป็นหน้า Attraction (index.html)
  """
  return render_template("index.html")

@app.route("/tech")
def tech_page():
  """หน้าแสดงข้อมูลเทคโนโลยี"""
  return render_template("tech.html")

@app.route("/myid")
def my_id():
  """หน้าแสดงรหัสนักศึกษา"""
  student_id = "68130481"
  return render_template("myid.html", student_id=student_id)

@app.route("/draw")
def draw_pattern():
  """หน้าสำหรับวาด Pattern"""
  rows_str = request.args.get('rows')
  char = request.args.get('char', 'x')
  
  if rows_str and rows_str.isdigit():
      rows = int(rows_str)
      pattern_lines = [myfunc(char, i) for i in range(1, rows + 1)]
      response = make_response(render_template("draw.html", pattern=pattern_lines, num_rows=rows, character=char, has_result=True))
  else:
      response = make_response(render_template("draw.html", has_result=False))
  
  # เพิ่ม Headers เพื่อสั่งเบราว์เซอร์ "ห้าม Cache หน้านี้"
  response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
  response.headers["Pragma"] = "no-cache"
  response.headers["Expires"] = "0"
  return response

if __name__ == "__main__":
  app.run(debug=True)