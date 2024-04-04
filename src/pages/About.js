import { Button, Classes, H4, Pre, Tooltip } from "@blueprintjs/core";
import { faCopy, faTrophy } from "@fortawesome/pro-duotone-svg-icons";
import copy from "copy-to-clipboard";
import { faIcon } from "../icon";
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
