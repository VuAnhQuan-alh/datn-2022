import { Col, Divider, Menu, Row, Typography } from 'antd'
import React, { useState } from 'react'
import { Award, Bookmark, Box, Check, Code, FileText, HelpCircle, MessageCircle, MessageSquare, Share2, Star, Sun, User } from 'react-feather'
import { CustomIconChallenge } from '../../../../@core/components'
import './index.scss'

const contentSubs = {
  'sub-1': <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, temporibus!</>,
  'sub-2': <>Lorem, ipsum.</>,
  'sub-3': <>Lorem ipsum dolor sit amet consectetur adipisicing elit.</>,
  'sub-4': <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perferendis tempore vero.</>,
  'sub-5': <>Lorem, ipsum dolor.</>,
  'sub-6': <>Lorem ipsum dolor sit amet consectetur.</>,
  'sub-7': <>Lorem</>,
  'sub-8': <>Lorem ipsum dolor sit amet.</>,
}

const TabListCase = () => {
  const [subKey, setSubKey] = useState('sub-1')
  return (
    <Row gutter={8}>
      <Col span={5}>
        <Menu
          defaultSelectedKeys={['sub-1']}
          mode="inline"
          inlineCollapsed={true}
          onSelect={({ key }) => {
            setSubKey(key)
          }}
        >
          <Menu.Item key="sub-1" icon={<FileText size={18} />}>
            Mô tả
          </Menu.Item>
          <Menu.Item key="sub-2" icon={<MessageCircle size={18} />}>
            Thảo luận
          </Menu.Item>
          <Menu.Item key="sub-3" icon={<Code size={18} />}>
            Bài giải của bạn
          </Menu.Item>
          <Menu.Item key="sub-4" icon={<Share2 size={18} />}>
            Bài giải được chia sẻ
          </Menu.Item>
          <Menu.Item key="sub-5" icon={<Sun size={18} />}>
            Giợi ý lời giải
          </Menu.Item>
          <Menu.Item key="sub-6" icon={<Box size={18} />}>
            Lời giải
          </Menu.Item>
          <Menu.Item key="sub-7" icon={<User size={18} />}>
            Lời giải
          </Menu.Item>
          <Menu.Item key="sub-8" icon={<HelpCircle size={18} />}>
            Trợ giúp
          </Menu.Item>
        </Menu>
      </Col>
      <Col span={19}>
        <Row>
          <CustomIconChallenge level="F" size="small" />
          <Typography.Title level={5}>Staff Feedback</Typography.Title>
        </Row>
        <Row gutter={8} align="middle">
          <Col>
            <Star size={14} /> 30
          </Col>
          <Col>
            <Check size={14} /> 24%
          </Col>
          <Col>
            <Award size={14} /> 1%
          </Col>
          <Col>
            <MessageSquare size={14} /> 1
          </Col>
          <Col>
            <Bookmark size={14} /> 2
          </Col>
        </Row>
        <Divider style={{ margin: '6px 0px 10px' }} />
        {contentSubs[subKey]}
      </Col>
    </Row>
  )
}

export default TabListCase