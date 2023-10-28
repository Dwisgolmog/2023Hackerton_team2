from flask import Flask,request
import requests
from bs4 import BeautifulSoup

#db
keyword = ["AI"]

app = Flask(__name__)



@app.route("/")
def home():
    print("Hello")
    return "HelloWorld"

@app.route("/crawl")
def crawl():
    url = "https://www.skku.edu/skku/campus/skk_comm/notice01.do#"
    response = requests.get(url)
    html = response.text
    soup = BeautifulSoup(html, 'html.parser')
    tiltes = soup.find_all("dt", class_ = 'board-list-content-title')
    for title in tiltes:
        print(title.find("a").strip())
        break
    return ("Done")


if __name__ == "__main__":
    app.run(debug=True)