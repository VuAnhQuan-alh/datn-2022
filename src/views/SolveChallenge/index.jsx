/* eslint-disable react-hooks/exhaustive-deps */
import Editor from "@monaco-editor/react";
import { Button, Card, Col, message, Row, Select } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Star } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  getAChallenge,
  userRunSolution,
  userSubmitChallenge,
} from "../../redux/actions/challenges";
import { TabListCase, TestCase } from "./components";

const { Option } = Select;

const SolveChallenge = () => {
  const editorRef = useRef(null);
  const [language, setLanguage] = useState("javascript");
  const [baseAnswer, setBaseAnswer] = useState(null);

  const dispatch = useDispatch();
  const { data: detailChallenge } = useSelector(
    (store) => store.list_challenges
  );
  const { data: dataTestCase } = useSelector((store) => store.action_challenge);

  useEffect(() => {
    if (dataTestCase?.score && dataTestCase.score > 0) {
      message.success(
        `Chúc mừng bạn nhận được ${dataTestCase.score} điểm.`,
        10
      );
    }
  }, [dataTestCase]);

  const { pathname } = useLocation();
  const id = pathname.split("/")[2];

  useEffect(() => {
    dispatch(getAChallenge(id));
  }, [dispatch, id]);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const handleSubmitCode = async (id, type) => {
    const str = editorRef.current.getValue();
    const result = {
      code: btoa(str),
      language: language,
    };
    if (type === "test") {
      message.success("Đã chạy thử.");
      dispatch(userRunSolution(id, result));
    } else {
      dispatch(userSubmitChallenge(id, result));
    }
  };

  const getDataFunc = (lang) => {
    const result = detailChallenge?.code_temps?.find(
      (item) => item.lang === lang
    )?.code;
    setBaseAnswer(result);
  };
  const getDataAnswerView = (language = "javascript") => {
    const data = detailChallenge?.log_challenges?.find(
      (item) => item.language === language
    )?.code_text;
    data && setBaseAnswer(atob(data));
  };

  useEffect(() => {
    getDataFunc(language);
    getDataAnswerView(language);
  }, [language, detailChallenge]);

  return (
    <Card>
      <Row gutter={16}>
        <Col span={9}>
          <TabListCase detail={detailChallenge} />
        </Col>
        <Col span={15}>
          <Row gutter={16} style={{ marginBottom: 8 }}>
            <Col>
              <Button onClick={() => handleSubmitCode(id, "test")}>
                Chạy thử
              </Button>
            </Col>
            <Col>
              <Button onClick={() => handleSubmitCode(id, "submit")}>
                Nộp bài
              </Button>
            </Col>
            <Col>
              <Row align="middle" style={{ marginTop: 4 }}>
                <Star size={16} />
                &nbsp; 0 / {detailChallenge?.score}
              </Row>
            </Col>
            <Col>
              <Select
                defaultValue={language}
                style={{ width: "120px" }}
                onChange={(value) => setLanguage(value)}
              >
                {/* <Option value="c">C</Option> */}
                <Option value="php">PHP</Option>
                <Option value="java">Java</Option>
                <Option value="javascript">JavaScript</Option>
                <Option value="python3">Python 3</Option>
              </Select>
            </Col>
          </Row>
          <Row>
            <Editor
              height="365px"
              language={language}
              value={baseAnswer}
              theme="vs-dark"
              options={{
                selectOnLineNumbers: true,
                minimap: { enabled: false },
              }}
              onMount={handleEditorDidMount}
            />
          </Row>
          <Row>
            <TestCase data={detailChallenge} />
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default SolveChallenge;
