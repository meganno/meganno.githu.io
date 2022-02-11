## Welcome to the Meganno demo

We provide a hosted Meganno service with limited functionarlites for demonstration purposes [here](http://13.52.218.71/).

The demostration is backed by Jupyterhub and will spawn a new notebook server for each user.
To explore, you can choose to 
1. Use a shared account we provide with username *demo* , password *tryit*. Note the jupyter notebook and the annotation space in the databases will be shared. There are risks of inconsistencies if multiple people are editing at the same time.
2. Create your own account and namespace. During the first visit, you will be prompt to create a user, click "sign in with KeyCloak" -> "register" when prompted. For this public demo, we don't aim to collect any user data or annotation. We suggest you to use dummy name and email addresses (xxx@xxxx.com format is fine, we only do format validation)

After logged in, you will see the demo notebook we provide. We have prepopulated the database with the public [Twitter US Airline Sentiment](https://www.kaggle.com/crowdflower/twitter-airline-sentiment), created a schema to collect "postive", "negative" and "netural" classification labels and "happy" or "sad" span labels. We also set [sentence bert](https://huggingface.co/sentence-transformers) vector embeddings for all data points. To avoid inconsitencies, we turn off access for project managment functionalites like importing data, changing schema and setting metadata in this public demo.

Then follow the instructions in the notebook and happy exploring!


Stay tuned for the public release for the toolkit for customized deployment where you can host your own service and databases.


### Support or Contact

Having trouble? contact dan_z@megagon.ai and we’ll help you sort it out.
