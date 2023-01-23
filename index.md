## Welcome to the Meganno demo

We provide a hosted Meganno service with limited functionarlites for demonstration purposes [here]([https://github.com/meganno/demo](https://mybinder.org/v2/gh/meganno/demo/main?filepath=%2Fnotebooks%2FDASH-Demo.ipynb
)).


To explore, download the demo repo and run 
```pip install -r requirements.txt``` 
and open the notebook `DASH-Demo.ipynb` with your jupyter server.

*Note the current widgets are not compatible with JupyterLab, so please use the conventional jupyter notebook*


We have prepopulated the database with the public [Twitter US Airline Sentiment](https://www.kaggle.com/crowdflower/twitter-airline-sentiment), created a schema to collect "postive", "negative" and "netural" classification labels and "pos" or "neg" span labels. We also set [sentence bert](https://huggingface.co/sentence-transformers) vector embeddings for all data points. To avoid inconsitencies, we turn off access for project managment functionalites like importing data, changing schema and setting metadata in this public demo.

Then follow the instructions in the notebook and happy exploring!


Stay tuned for the public release for the toolkit for customized deployment where you can host your own service and databases.


### Support or Contact

Having trouble? contact us at {dan_z,hannah,rafael}@megagon.ai and we’ll be happy to help.

If you are at EMNLP, stop by the Megagon Labs booth (exhibitor area #7) to speak with our lovely team members and check out a live demo!
