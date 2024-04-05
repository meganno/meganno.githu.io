import { Button, H3, Intent } from "@blueprintjs/core";
import { scrollIntoViewWithOffset } from "../constant";
export default function About() {
    return (
        <>
            <H3 id="page-about-title" style={{ textAlign: "center" }}>
                About
            </H3>
            Try our MEGAnno demo, a human-LLM collaborative annotation
            framework.
            <br />
            <br />
            MEGAnno offers:
            <ul>
                <li>Effective LLM agent and annotation management</li>
                <li>Convenient and robust LLM annotation</li>
                <li>Exploration and verification of LLM labels by humans</li>
                <li>Seamless annotation experience within Jupyter notebooks</li>
            </ul>
            <br />
            This demo provides a playground for you to try out features of
            MEGAnno+ on a Google Colab notebook. We host the backend service
            with example dataset and labeling tasks.
            <div
                style={{
                    marginTop: 30,
                    marginBottom: 40,
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Button
                    onClick={() => {
                        scrollIntoViewWithOffset("#page-request-form-title");
                    }}
                    large
                    intent={Intent.SUCCESS}
                    text="Request your token!"
                />
            </div>
            <video
                src="https://meganno.s3.amazonaws.com/eacl-2024-demo.mp4"
                controls="controls"
                style={{ width: "100%" }}
            />
        </>
    );
}
