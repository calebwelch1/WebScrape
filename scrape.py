import requests
from bs4 import BeautifulSoup as bs

# load webpage
r = requests.get('https://keithgalli.github.io/web-scraping/webpage.html')
# convert to soup object
soup = bs(r.content)

# print(soup.prettify())

# remember to run python type python then the name of the file
# wow we have all the html content from that website! pretty cool
# prints the first header
first_header=soup.find('h2')
# print(first_header)
headers=soup.find_all('h2')
# prints all h2's
# print(headers)
# first occurance of ONE of the items
first_header = soup.find('h2','h2')
# prints all occurrences of both
headers = soup.find_all(['h1','h2'])
# print(headers)

# you can pass attributes to the find functions
paragraph = soup.find_all('p', attrs={'id':'paragraph-id'})
# print(paragraph)

# you can nest find all calls
body = soup.find('body')
# finds divs within the body
div = body.find('div')
# print(div)
# use some reg ex
import re
# if we just did string it would look for the exact string
# with this we can find a paragraph with a word in it
paragraphs = soup.find_all('p', string=re.compile('some'))
print(paragraphs)

########################################### Select method (CSS)
# similar to a find all
content = soup.select('p')


