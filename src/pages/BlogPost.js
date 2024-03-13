import {
    Button,
    Card,
    Classes,
    FormGroup,
    H3,
    H4,
    InputGroup,
    Intent,
    Pre,
    TextArea,
    Tooltip,
} from "@blueprintjs/core";
import {
    faCircle1,
    faCircle2,
    faCopy,
    faInboxOut,
    faTrophy,
} from "@fortawesome/pro-duotone-svg-icons";
import axios from "axios";
import classNames from "classnames";
import copy from "copy-to-clipboard";
import _ from "lodash";
import { useEffect, useState } from "react";
import { Col, Row } from "react-grid-system";
import { validateEmail } from "../constant";
import { faIcon } from "../icon";
import logo from "../logo_with_text_vertical.png";
import figure1 from "../meganno_site_fig1.png";
import figure2 from "../meganno_site_fig2.png";
import { actionToaster, createToast } from "../toaster";
export default function BlogPost() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const [loading, setLoading] = useState(false);
    const [heardFrom, setHeardFrom] = useState("");
    const [useFor, setUseFor] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
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
    const clearForm = () => {
        setHeardFrom("");
        setUseFor("");
        setName("");
        setEmail("");
    };
    const [error, setError] = useState({});
    const handleSubmit = () => {
        let check = {};
        if (!validateEmail(email)) {
            check["email"] = "Invalid email address.";
        }
        if (_.isEmpty(_.trim(name))) {
            check["name"] = "Name cannot be empty.";
        }
        if (_.isEmpty(_.trim(heardFrom))) {
            check["heardFrom"] = "Cannot be empty.";
        }
        if (_.isEmpty(_.trim(useFor))) {
            check["useFor"] = "Cannot be empty.";
        }
        if (!_.isEmpty(check)) {
            setError(check);
            return;
        }
        setError({});
        setLoading(true);
        axios
            .post(
                "https://labeler.megagon.ai:3379/request_form",
                {
                    heard_from: heardFrom,
                    use_for: useFor,
                    name: name,
                },
                { params: { email: email, project: "blog_post" } }
            )
            .then(() => {
                actionToaster.show(
                    createToast({
                        message:
                            "Your request is under review. Thanks for applying!",
                        intent: Intent.SUCCESS,
                    })
                );
                setLoading(false);
                clearForm();
            })
            .catch(({ response }) => {
                const data = _.get(response, "data", {});
                setError(data);
                actionToaster.show(
                    createToast({
                        message: JSON.stringify(data),
                        intent: Intent.DANGER,
                    })
                );
                setLoading(false);
            });
    };
    return (
        <div
            style={{
                height: "calc(100vh - 50px)",
                overflowY: "auto",
            }}
            className={classNames(Classes.RUNNING_TEXT, "page-scroll-area")}
        >
            <div
                style={{
                    maxWidth: "100vw",
                    margin: "auto",
                    width: 800,
                    marginTop: width < 1200 ? 105 : 0,
                    paddingLeft: 15,
                    paddingRight: 15,
                }}
            >
                <H3 id="page-about-title" style={{ textAlign: "center" }}>
                    About
                </H3>
                <H4 className={Classes.TEXT_MUTED}>What is MEGAnno?</H4>
                <p>
                    MEGAnno is a human-LLM collaborative annotation framework.
                    For cost-efficient and high-quality annotation, we adopt the
                    LLM annotation → Human verification workflow where LLM
                    agents label data first and then humans verify a subset of
                    potentially problematic LLM labels.
                </p>
                <Card style={{ padding: 0, overflow: "hidden" }}>
                    <img width="100%" src={figure1} />
                </Card>
                <p>
                    <i>Figure 1. Our human-LLM collaborative workflow.</i>
                </p>
                <br />
                Our features include:
                <ul>
                    <li>Effective LLM agent and annotation management</li>
                    <li>Convenient and robust LLM annotation</li>
                    <li>
                        Exploration and verification of LLM labels by humans
                    </li>
                    <li>
                        Seamless annotation experience within Jupyter notebooks
                    </li>
                </ul>
                <H4 className={Classes.TEXT_MUTED}>System Overview</H4>
                <p>
                    MEGAnno provides two key components:{" "}
                    {faIcon({ icon: faCircle1 })} a Python client library
                    featuring interactive widgets and{" "}
                    {faIcon({ icon: faCircle2 })} a back-end service consisting
                    of web API and database servers. To use our system, a user
                    can interact with a Jupyter Notebook that has the MEGAnno
                    demo client installed. Through programmatic interfaces and
                    UI widgets, the demo client communicates with the demo
                    service.
                </p>
                <Card style={{ padding: 0, overflow: "hidden" }}>
                    <img width="100%" src={figure2} />
                </Card>
                <p>
                    <i>Figure 2. Overview of MEGAnno+ system.</i>
                </p>
                <H4 className={Classes.TEXT_MUTED}>Demo</H4>
                <p>
                    This demo allows you to try out our system on Google Colab
                    using an example dataset and labeling task. We plan to
                    release a full open-sourced version shortly after, so stay
                    tuned. For more information, please check out our EACL 2024
                    demo paper below:
                </p>
                <div>
                    <a target="_blank" href="https://arxiv.org/abs/2402.18050">
                        MEGAnno+: A Human-LLM Collaborative Annotation System
                    </a>
                    <p>
                        Hannah Kim, Kushan Mitra, Rafael Li Chen, Sajjadur
                        Rahman, Dan Zhang
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
                <H3 id="page-instruction-title" style={{ textAlign: "center" }}>
                    Instruction
                </H3>
                <ol>
                    <li>
                        <p>
                            In arcu cursus euismod quis. Vel eros donec ac odio
                            tempor orci dapibus. Sollicitudin ac orci phasellus
                            egestas tellus rutrum tellus pellentesque. Sem
                            integer vitae justo eget magna fermentum. Tellus
                            molestie nunc non blandit massa enim nec dui nunc.
                            Phasellus egestas tellus rutrum tellus pellentesque
                            eu tincidunt tortor. Nunc mattis enim ut tellus
                            elementum sagittis vitae et. Ut tortor pretium
                            viverra suspendisse. Et ligula ullamcorper malesuada
                            proin libero nunc consequat. In nibh mauris cursus
                            mattis. Orci sagittis eu volutpat odio facilisis
                            mauris.
                        </p>
                        <Pre style={{ overflowX: "auto" }}>
                            Facilisis gravida neque convallis a cras semper
                            auctor. Justo laoreet sit amet cursus sit amet
                            dictum.
                            <br />
                            Hac habitasse platea dictumst quisque sagittis
                            purus. Magna eget est lorem ipsum dolor.
                        </Pre>
                    </li>
                </ol>
                <H3
                    id="page-request-form-title"
                    style={{ textAlign: "center" }}
                >
                    Request Form
                </H3>
                <FormGroup
                    label="Where did you hear about MEGAnno?"
                    helperText={
                        _.has(error, "heardFrom") ? error.heardFrom : null
                    }
                >
                    <InputGroup
                        intent={
                            _.has(error, "heardFrom") ? Intent.DANGER : null
                        }
                        className={loading ? Classes.SKELETON : null}
                        type="text"
                        large
                        value={heardFrom}
                        onChange={(event) => {
                            setHeardFrom(event.target.value);
                        }}
                    />
                </FormGroup>
                <FormGroup
                    label="What will you be using it for?"
                    helperText={_.has(error, "useFor") ? error.useFor : null}
                >
                    <TextArea
                        intent={_.has(error, "useFor") ? Intent.DANGER : null}
                        className={loading ? Classes.SKELETON : null}
                        large
                        fill
                        style={{ resize: "none", minHeight: 88 }}
                        autoResize
                        value={useFor}
                        onChange={(event) => {
                            setUseFor(event.target.value);
                        }}
                    />
                </FormGroup>
                <Row>
                    <Col xs={12} sm={6}>
                        <FormGroup
                            label="Name"
                            helperText={
                                _.has(error, "name") ? error.name : null
                            }
                        >
                            <InputGroup
                                intent={
                                    _.has(error, "name") ? Intent.DANGER : null
                                }
                                className={loading ? Classes.SKELETON : null}
                                large
                                type="text"
                                value={name}
                                onChange={(event) => {
                                    setName(event.target.value);
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={6}>
                        <FormGroup
                            label="Email"
                            helperText={
                                _.has(error, "email") ? error.email : null
                            }
                        >
                            <InputGroup
                                intent={
                                    _.has(error, "email") ? Intent.DANGER : null
                                }
                                className={loading ? Classes.SKELETON : null}
                                large
                                type="email"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <div
                    style={{
                        marginTop: 15,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Button
                        className={loading ? Classes.SKELETON : null}
                        icon={faIcon({ icon: faInboxOut })}
                        intent={Intent.SUCCESS}
                        large
                        onClick={handleSubmit}
                        text="Submit"
                    />
                </div>
                <H3 style={{ textAlign: "center" }}>Resource</H3>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: 40,
                    }}
                >
                    <a target="_blank" href="https://megagon.ai">
                        <img src={logo} width={150} />
                    </a>
                </div>
            </div>
        </div>
    );
}
