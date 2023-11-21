## Welcome to the MegAnno+ demo


We provide a pip-installable client library and a demo notebook (add link). A Conda environment is strongly recommended; see below for instructions.


## **Instructions**
1. Download [conda](https://conda.io/projects/conda/en/stable/user-guide/install/download.html)
2. Create a conda environment
   - Run `conda create -n <env_name> python=3.9`
   - Run `conda activate <env_name>`
3. Install MegAnno+ libs (following development labeler-client and labeler-ui)
    - Run `pip install "labeler_client[ui] @ git+ssh://git@github.com/rit-git/labeler-client.git"`
    - Or run `pip install "labeler_client[ui] @ git+https://github.com/rit-git/labeler-client.git"`
      - You may need to use [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) instead of password<br/>

4. Set up OpenAI API Keys [using environment variables in place of your API key
](https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety#h_a1ab3ba7b2) (They stay in your browser; we don't store your OpenAI keys)

5. Explore in demo notebook
   - `pip install jupyter`
   - Run `jupyter notebook`
   - Open demo notebook (add link)

*Note the current widgets are not compatible with JupyterLab, so please use the conventional jupyter notebook*

We have prepopulated the database with the public [Twitter US Airline Sentiment](https://www.kaggle.com/crowdflower/twitter-airline-sentiment), created a schema to collect "postive", "negative" and "netural" classification labels and "pos" or "neg" span labels.

Then follow the instructions in the notebook and happy exploring!




