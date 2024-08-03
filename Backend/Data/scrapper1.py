import requests
from bs4 import BeautifulSoup
import pandas as pd
import datetime

def fetch_historical_data(name):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Connection': 'keep-alive'
    }

    url = f'https://www.investing.com/indices/{name}-historical-data'
    response = requests.get(url, headers=headers)
    if response.status_code != 200:
        print(f"Failed to retrieve data: {response.status_code}")
        return pd.DataFrame()

    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Locate the table with the specific class
    table = soup.find('table', {'class': 'freeze-column-w-1 w-full overflow-x-auto text-xs leading-4'})
    if table is None:
        print("Historical data table not found.")
        return pd.DataFrame()

    # Extract headers
    header_row = table.find('thead')
    headers = [header.text.strip() for header in header_row.find_all('th')]
    if len(headers) != 7:
        print("Header structure is not as expected.")
        return pd.DataFrame()

    # Extract data from the table
    rows = table.find_all('tr')[:]  # Skip the header row
    data = []
    for row in rows:
        cols = row.find_all('td')
        if len(cols) < 7:
            continue
        date = cols[0].text.strip()
        try:
            # Correct date format
            date = datetime.datetime.strptime(date, '%b %d, %Y')  # Update date format here
            price = float(cols[1].text.replace(',', '').replace('₹', '').strip())
            open_ = float(cols[2].text.replace(',', '').replace('₹', '').strip())
            high = float(cols[3].text.replace(',', '').replace('₹', '').strip())
            low = float(cols[4].text.replace(',', '').replace('₹', '').strip())
            volume = cols[5].text.replace(',', '').replace('₹', '').strip()
            volume = int(volume) if volume.isdigit() else 0
            change_percent = cols[6].text.strip()
            data.append([date, price, open_, high, low, volume, change_percent])
        except ValueError as e:
            print(f"Skipping row due to error: {e}")
            continue

    if not data:
        print("No data found")
        return pd.DataFrame()

    df = pd.DataFrame(data, columns=headers)
    return df

# Fetch data for Sensex and Nifty 50
sensex_data = fetch_historical_data('sensex')
nifty_data = fetch_historical_data('s-p-cnx-nifty')

# Save to CSV files
if not sensex_data.empty:
    sensex_data.to_csv('./Backend/Data/sensex.csv', index=False)
else:
    print("Sensex data is empty")

if not nifty_data.empty:
    nifty_data.to_csv('./Backend/Data/nifty-50.csv', index=False)
else:
    print("Nifty data is empty")

print("Sensex Data:\n", sensex_data.head())
print("Nifty Data:\n", nifty_data.head())
