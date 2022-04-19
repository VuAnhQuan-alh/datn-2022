import Editor from "@monaco-editor/react";
import { Button, Card, Col, Row, Select } from "antd";
import React, { useRef, useState } from "react";
import { Star } from "react-feather";
import { TabListCase, TestCase } from "./components";

const { Option } = Select;

const SolveChallenge = () => {
  const editorRef = useRef(null)
  const [equal, setEqual] = useState('')
  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor
  }
  const handleCode = () => {
    const str = editorRef.current.getValue();
    // const result = btoa(str);
  }
  const main = `\nfunction main(data) { \n    /* coding here */\n    return data;\n};\nmain(data);`
  const handleChangeLanguages = (value) => { }

  return (
    <Card>
      <Row gutter={16}>
        <Col span={9}>
          <TabListCase />
        </Col>
        <Col span={15}>
          <Row gutter={16} style={{ marginBottom: 8 }}>
            <Col>
              <Button>Run test case</Button>
            </Col>
            <Col>
              <Button onClick={handleCode}>Chạy thử</Button>
            </Col>
            <Col>
              <Row align="middle" style={{ marginTop: 4 }}>
                <Star size={16} />&nbsp; 0 / 30
              </Row>
            </Col>
            <Col>
              <Select defaultValue="c" style={{ width: "120px" }} onChange={handleChangeLanguages}>
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
              defaultLanguage="javascript"
              defaultValue={main}
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
