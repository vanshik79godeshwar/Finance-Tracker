import requests
from bs4 import BeautifulSoup

url1 = "https://www.google.com/finance/quote/SENSEX:INDEXBOM"
url2 = "https://www.google.com/finance/quote/NIFTY_50:INDEXNSE"

response1 = requests.get(url1)
response2 = requests.get(url2)

soup1 = BeautifulSoup(response1.content, 'html.parser')
soup2 = BeautifulSoup(response2.content, 'html.parser')

text1 = soup1.find('div', class_='YMlKec fxKbKc').text
text2 = soup2.find('div', class_='YMlKec fxKbKc').text

print("SENSEX:",text1)
print("NIFTY_50:",text2)