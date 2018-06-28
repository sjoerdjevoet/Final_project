import json
import csv

# storing rows of csv in list
with open(datafiles) as f:
    reader = csv.DictReader(f)
    rows = list(reader)

# creating new file and storing the information in json format
with open(datafiles, 'w') as f:
    json.dump(rows, f)
