import {
    Blockquote,
    Callout,
    Classes,
    H1,
    H2,
    H4,
    Intent,
    Pre,
} from "@blueprintjs/core";
import { isMobile } from "react-device-detect";
import "../App.css";
export default function Main() {
    return (
        <div style={{ marginTop: isMobile ? 30 : 40 }}>
            <H1 style={{ marginBottom: 20 }}>Welcome to the MegAnno demo</H1>
            <H4>Demo Video</H4>
            <video
                src="https://meganno.s3.amazonaws.com/eacl-2024-demo.mp4"
                controls="controls"
                style={{ maxWidth: 567, width: "100%" }}
            />
            <Callout
                icon={null}
                intent={Intent.PRIMARY}
                style={{ marginTop: 20 }}
            >
                <H4>Try it out!</H4>
                <div className={Classes.RUNNING_TEXT}>
                    We provide a pip-installable client library and a demo{" "}
                    <a
                        target="_blank"
                        href="https://github.com/meganno/labeler-client/blob/main/Examples/EACL-Demo.ipynb"
                    >
                        notebook
                    </a>
                    . A Conda environment is strongly recommended; see below for
                    instructions.
                </div>
            </Callout>
            <H2 style={{ marginTop: 20 }}>Instructions</H2>
            <ol>
                <li>
                    <p>
                        Download{" "}
                        <a
                            target="_blank"
                            href="https://conda.io/projects/conda/en/stable/user-guide/install/index.html"
                        >
                            conda
                        </a>
                    </p>
                </li>
                <li>
                    <p>Create a conda environment</p>
                    <Pre style={{ overflowX: "auto" }}>
                        conda create -n &lt;env_name&gt; python=3.9
                        <br />
                        conda activate &lt;env_name&gt;
                    </Pre>
                </li>
                <li>
                    <p>
                        Install MegAnno libs (following development
                        labeler-client and labeler-ui)
                    </p>
                    <Pre style={{ overflowX: "auto" }}>
                        # run
                        <br />
                        pip install "labeler_client[ui] @
                        git+ssh://git@github.com/meganno/labeler-client.git"
                        <br />
                        <br />
                        # or Run
                        <br />
                        pip install "labeler_client[ui] @
                        git+https://github.com/meganno/labeler-client.git"
                    </Pre>
                    <ul>
                        <li>
                            <p>
                                You may need to use{" "}
                                <a
                                    target="_blank"
                                    href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens"
                                >
                                    personal access token
                                </a>{" "}
                                instead of password
                            </p>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>
                        Set up OpenAI API Keys{" "}
                        <a
                            target="_blank"
                            href="https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety#h_a1ab3ba7b2"
                        >
                            using environment variables in place of your API key
                        </a>{" "}
                        (we don’t record or store your key)
                    </p>
                </li>
                <li>
                    <p>Explore in demo notebook</p>
                    <Pre style={{ overflowX: "auto" }}>
                        pip install jupyter
                        <br />
                        jupyter notebook
                    </Pre>
                    <p>
                        Open demo{" "}
                        <a
                            target="_blank"
                            href="https://github.com/meganno/labeler-client/blob/main/Examples/EACL-Demo.ipynb"
                        >
                            notebook
                        </a>
                        , follow the instructions in the notebook and happy
                        exploring!
                    </p>
                </li>
            </ol>
            <Blockquote>
                We have prepopulated the database a natural language inference
                (NLI) dataset (
                <a target="_blank" href="https://github.com/alisawuffles/wanli">
                    link
                </a>
                ).
            </Blockquote>
        </div>
    );
}
