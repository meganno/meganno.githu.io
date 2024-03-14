import { Button, Card, Classes, H3, H4, Pre, Tooltip } from "@blueprintjs/core";
import {
    faArrowRightLong,
    faCircle1,
    faCircle2,
    faCopy,
    faTrophy,
} from "@fortawesome/pro-duotone-svg-icons";
import copy from "copy-to-clipboard";
import { faIcon } from "../icon";
import figure1 from "../meganno_site_fig1.png";
import figure2 from "../meganno_site_fig2.png";
export default function About() {
    const citaton_1 = `@inproceedings{meganno-plus,
    title = "{MEGA}nno+: A Human-{LLM} Collaborative Annotation System",
    author = "Kim, Hannah and Mitra, Kushan and Li Chen, Rafael and Rahman, Sajjadur and Zhang, Dan",
    booktitle = "Proceedings of the 18th Conference of the European Chapter of the Association for Computational Linguistics: System Demonstrations",
    year = "2024",
    publisher = "Association for Computational Linguistics",
}`;
    const citation_2 = `@inproceedings{zhang-etal-2022-meganno,
    title = "{MEGA}nno: Exploratory Labeling for {NLP} in Computational Notebooks",
    author = "Zhang, Dan and Kim, Hannah and Li Chen, Rafael and Kandogan, Eser and Hruschka, Estevam",
    editor = "Dragut, Eduard and Li, Yunyao and Popa, Lucian and Vucetic, Slobodan and Srivastava, Shashank",
    booktitle = "Proceedings of the Fourth Workshop on Data Science with Human-in-the-Loop (Language Advances)",
    month = dec,
    year = "2022",
    address = "Abu Dhabi, United Arab Emirates (Hybrid)",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2022.dash-1.1",
    pages = "1--7",
}`;
    return (
        <>
            <H3 id="page-about-title" style={{ textAlign: "center" }}>
                About
            </H3>
            <H4 className={Classes.TEXT_MUTED}>What is MEGAnno?</H4>
            <p>
                MEGAnno is a human-LLM collaborative annotation framework. For
                cost-efficient and high-quality annotation, we adopt the LLM
                annotation {faIcon({ icon: faArrowRightLong })} Human
                verification workflow where LLM agents label data first and then
                humans verify a subset of potentially problematic LLM labels.
            </p>
            <Card style={{ padding: 0, overflow: "hidden" }}>
                <img width="100%" src={figure1} />
            </Card>
            <p style={{ textAlign: "center" }}>
                <i>Figure 1. Our human-LLM collaborative workflow.</i>
            </p>
            <br />
            Our features include:
            <ul>
                <li>Effective LLM agent and annotation management</li>
                <li>Convenient and robust LLM annotation</li>
                <li>Exploration and verification of LLM labels by humans</li>
                <li>Seamless annotation experience within Jupyter notebooks</li>
            </ul>
            <H4 className={Classes.TEXT_MUTED}>System Overview</H4>
            <p>
                MEGAnno provides two key components:{" "}
                {faIcon({ icon: faCircle1 })} a Python client library featuring
                interactive widgets and {faIcon({ icon: faCircle2 })} a back-end
                service consisting of web API and database servers.{" "}
                <Tooltip
                    className={Classes.TOOLTIP_INDICATOR}
                    content="Open source in April."
                >
                    To use our system
                </Tooltip>
                , a user can interact with a Jupyter Notebook that has the
                MEGAnno client installed. Through programmatic interfaces and UI
                widgets, the client communicates with the service.
            </p>
            <Card style={{ padding: 0, overflow: "hidden" }}>
                <img width="100%" src={figure2} />
            </Card>
            <p style={{ textAlign: "center" }}>
                <i>Figure 2. Overview of MEGAnno+ system.</i>
            </p>
            <H4 className={Classes.TEXT_MUTED}>Demo</H4>
            <p>
                This demo provides a playground for you to try out features of
                MEGAnno+ on a Google Colab notebook. We host the backend service
                with example dataset and labeling tasks. To use MEGAnno for your
                own annotation needs, stay tuned for the full open-source
                release.
            </p>
            <p>
                For more information, please check out our EACL 2024 demo paper
                below:
            </p>
            <div>
                <a target="_blank" href="https://arxiv.org/abs/2402.18050">
                    MEGAnno+: A Human-LLM Collaborative Annotation System
                </a>
                <p>
                    Hannah Kim, Kushan Mitra, Rafael Li Chen, Sajjadur Rahman,
                    Dan Zhang
                    <br />
                    EACL 2024 Demo
                </p>
            </div>
            <Tooltip
                placement="bottom-start"
                content={
                    <Pre style={{ width: 500, overflow: "hidden" }}>
                        {citaton_1}
                    </Pre>
                }
            >
                <Button
                    icon={faIcon({ icon: faCopy })}
                    outlined
                    onClick={() => {
                        copy(citaton_1);
                    }}
                    text={
                        <div>
                            Cite our paper&nbsp;
                            <span className={Classes.TEXT_MUTED}>
                                (click to copy)
                            </span>
                        </div>
                    }
                />
            </Tooltip>
            <div style={{ marginTop: 20 }}>
                <a
                    target="_blank"
                    href="https://aclanthology.org/2022.dash-1.1/"
                >
                    MEGAnno: Exploratory Labeling for NLP in Computational
                    Notebooks
                </a>
                <p>
                    Dan Zhang, Hannah Kim, Rafael Li Chen, Eser Kandogan,
                    Estevam Hruschka
                    <br />
                    DaSH Workshop @ EMNLP 2022, Best paper award&nbsp;
                    {faIcon({
                        icon: faTrophy,
                        style: { color: "#D1980B" },
                    })}
                </p>
            </div>
            <Tooltip
                placement="bottom-start"
                content={
                    <Pre style={{ width: 500, overflow: "hidden" }}>
                        {citation_2}
                    </Pre>
                }
            >
                <Button
                    icon={faIcon({ icon: faCopy })}
                    outlined
                    onClick={() => {
                        copy(citation_2);
                    }}
                    text={
                        <div>
                            Cite our paper&nbsp;
                            <span className={Classes.TEXT_MUTED}>
                                (click to copy)
                            </span>
                        </div>
                    }
                />
            </Tooltip>
        </>
    );
}
