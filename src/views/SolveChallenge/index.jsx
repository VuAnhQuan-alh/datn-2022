import Editor from "@monaco-editor/react";
import { Button, Card, Col, Row } from "antd";
import React, { useRef, useState } from "react";
import { Star } from "react-feather";
import { TabListCase, TestCase } from "./components";

const SolveChallenge = () => {
  const editorRef = useRef(null)
  const [equal, setEqual] = useState('')
  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor
  }
  const handleCode = () => {
    const str = editorRef.current.getValue().split('main(data)')[1]
    const funcString = str.substring(3, str.length - 3).trim()
    const data = 'vu anh quan'
    // eslint-disable-next-line no-new-func
    let func = new Function('data', funcString)
    const result = func(data)
    setEqual(result)
  }
  const main = `\nfunction main(data) { \n    /* coding here */\n    return data;\n};\nmain(data);`

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
