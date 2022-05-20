import { Tabs, Row, Col } from 'antd'
import { isEmpty } from 'lodash'
import React, { useEffect, useState } from 'react'
import { AlertTriangle, CheckCircle, Lock } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'
import { userDeleteSolution } from '@store/actions/challenges'
import './index.scss'

const { TabPane } = Tabs

const TestCase = ({ data }) => {
  const dispatch = useDispatch()
  const { data: dataTest, status } = useSelector(store => store.action_challenge)
  const [equalTest, setEqualTest] = useState([])

  useEffect(() => {
    if (status === 'success') setEqualTest(dataTest) && console.log('render')
  }, [dataTest, status])
  useEffect(() => {
    return dispatch(userDeleteSolution())
  }, [dispatch])

  const test_cases = data.test_case?.map((item, idx) => ({ key: idx, ...item }))
  const formatEqual = (test) => {
    return <>
      <Row>
        <Col span={8}>Input:</Col>
        <Col span={16}>{test.input[0].value}</Col>
      </Row>
      <Row>
        <Col span={8}>Actual output:</Col>
        <Col span={16}>{!isEmpty(equalTest) && equalTest.test_case?.find(item => item.id === test._id)?.output}</Col>
      </Row>
      <Row>
        <Col span={8}>Expected output:</Col>
        <Col span={16}>{test.expect}</Col>
      </Row>
      <Row>
        <Col span={8}>Execute time:</Col>
        <Col span={16}>{!isEmpty(equalTest) && equalTest.test_case?.find(item => item.id === test._id)?.time_run}</Col>
      </Row>
      <Row>
        <Col span={8}>Message:</Col>
        <Col span={16}>{!isEmpty(equalTest) && equalTest.test_case?.find(item => item.id === test._id)?.status}</Col>
      </Row>
    </>
  }
  return (
    <Tabs
      className='custom-card-test'
      tabPosition='left'
      defaultActiveKey='test-1'
    >
      {test_cases && test_cases.map(item =>
        <TabPane
          key={`test-${++item.key}`}
          tab={<Row align='middle'>
            Test case {++item.key}&nbsp;
            {item.hidden
              ? <Lock size={14} />
              : isEmpty(equalTest) ? '' : equalTest.test_case?.find(test => test.id === item._id)?.pass
                ? <CheckCircle size={16} color="green" />
                : <AlertTriangle size={16} color="red" />}
          </Row>}>
          {formatEqual(item)}
        </TabPane>
      )}
    </Tabs>
  )
}

export default TestCase