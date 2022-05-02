/* eslint-disable react-hooks/exhaustive-deps */
import Editor from "@monaco-editor/react";
import { Button, Card, Col, Row, Select } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Star } from "react-feather";
import { useLocation } from "react-router-dom";
import { ChallengesAPI } from "../../api";
import { TabListCase, TestCase } from "./components";

const { Option } = Select;

const SolveChallenge = () => {
  const editorRef = useRef(null)
  const [equal, setEqual] = useState(true)
  const [language, setLanguage] = useState("javascript")
  const [dataTestCase, setDataTestCase] = useState({})
  const [dataLanguage, setDataLanguage] = useState([])
  const [dataChallenge, setDataChallenge] = useState({})
  const [detailChallenge, setDetailChallenge] = useState({})
  const [baseAnswer, setBaseAnswer] = useState(null)
  const [logChallenge, setLogChallenge] = useState([])

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor
  }
  const { pathname } = useLocation()
  const id = pathname.split('/')[2]

  const handleTest = async (id) => {
    const str = editorRef.current.getValue();
    const result = {
      code: btoa(str),
      language: language
    }
    await ChallengesAPI.runSolution(id, result)
      .then(response => {
        if (response.status === 200) {
          const result = response.data.data
          console.log(result)
          setDataTestCase(result)
          setEqual(result.pass)
        }
      })
  }
  const handleCode = async () => {
    const str = editorRef.current.getValue();
    const result = {
      code: btoa(str),
      language: language
    }
    await ChallengesAPI.submitChallenge(id, result)
      .then(response => {
        console.log(response.data.data)
      })
  }

  const getDetailChallenge = async (id = "626d2dcafa7ca2f89e52c21a") => {
    await ChallengesAPI.getDetailChallenge(id)
      .then(response => {
        if (response.status === 200) {
          setDetailChallenge(response.data.data)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
  const handleDataChallenge = async (id = "626d2dcafa7ca2f89e52c21a") => {
    await ChallengesAPI.getDetailChallenge(id)
      .then(response => {
        if (response.status === 200) {
          setDataChallenge(response.data.data)
          setDataLanguage(response.data.data.code_temps)
          setLogChallenge(response.data.data.log_challenges)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
  const getDataFunc = (lang) => {
    const result = dataLanguage?.find(item => item.lang === lang)?.code
    setBaseAnswer(result)
  }
  const getDataAnswerView = (language) => {
    const data = logChallenge?.find(item => item.language === language)?.code_text
    console.log(data)
    data && setBaseAnswer(atob(data))
  }

  useEffect(() => {
    handleDataChallenge(id)
    getDetailChallenge(id)
    getDataFunc(language)
    getDataAnswerView(language)
  }, [id])
  useEffect(() => {
    getDataFunc(language)
    getDataAnswerView(language)
  }, [language])
  console.log("lang :", language)

  return (
    <Card>
      <Row gutter={16}>
        <Col span={9}>
          <TabListCase detail={detailChallenge} />
        </Col>
        <Col span={15}>
          <Row gutter={16} style={{ marginBottom: 8 }}>
            <Col>
              <Button onClick={() => handleTest(id)}>Run test case</Button>
            </Col>
            <Col>
              <Button onClick={handleCode}>Nộp bài</Button>
            </Col>
            <Col>
              <Row align="middle" style={{ marginTop: 4 }}>
                <Star size={16} />&nbsp; 0 / 30
              </Row>
            </Col>
            <Col>
              <Select
                defaultValue={language}
                style={{ width: "120px" }}
                onChange={(value) => setLanguage(value)}
              >
                <Option value="c">C</Option>
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
              // defaultValue={baseAnswer}
              theme="vs-dark"
              options={{ selectOnLineNumbers: true, minimap: { enabled: false } }}
              onMount={handleEditorDidMount}
            />
          </Row>
          <Row>
            <TestCase result={equal} />
          </Row>
        </Col>
      </Row>
    </Card>
  )
};

export default SolveChallenge;
