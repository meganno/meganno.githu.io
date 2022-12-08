## Welcome to the Meganno demo

We provide a hosted Meganno service with limited functionarlites for demonstration purposes [here]([http://13.52.218.71/](https://github.com/meganno/demo)).


To explore, download the demo repo and run `pip install -r requirements.txt` and open the notebook `DASH-Demo.ipynb`.


We have prepopulated the database with the public [Twitter US Airline Sentiment](https://www.kaggle.com/crowdflower/twitter-airline-sentiment), created a schema to collect "postive", "negative" and "netural" classification labels and "pos" or "neg" span labels. We also set [sentence bert](https://huggingface.co/sentence-transformers) vector embeddings for all data points. To avoid inconsitencies, we turn off access for project managment functionalites like importing data, changing schema and setting metadata in this public demo.

Then follow the instructions in the notebook and happy exploring!


Stay tuned for the public release for the toolkit for customized deployment where you can host your own service and databases.


### Support or Contact

Having trouble? contact us at {dan_z,hannah,rafael}@megagon.ai and we’ll be happy to help.
