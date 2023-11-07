import React, { useEffect } from "react";
import { Input, Button, Select, Col, Row, Divider } from "antd";

import WriteForm from "./WriteForm";

const DocsList = ({
  title,
  setTitle,
  content,
  setContent,
  disabled,
  button,
  completeLogic,
  selectedClass,
  setSelectedClass,
}) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setSelectedClass(value);
  };
  const titleChange = (value) => {
    setTitle(value.target.value);
    console.log(value.target.value);
  };

  return (
    <div>
      <Row>
        <Divider orientation="left" orientationMargin="0">
          <b>문서 제목</b>
        </Divider>
        <Input placeholder={title} onChange={titleChange} />
      </Row>

      <div>
        <Row>
          <Divider orientation="left" orientationMargin="0">
            <b>문서 분류</b>
          </Divider>
          {/* <Col flex={1}>
            <p>문서 분류 선택</p>
          </Col> */}
          <Col flex={5}>
            <Select
              mode="tags"
              style={{
                width: "90%",
              }}
              placeholder="문서 분류"
              onChange={handleChange}
              options={[]}
            />
          </Col>
        </Row>
      </div>

      <Divider orientation="left" orientationMargin="0">
        <b>문서 내용</b>
      </Divider>
      <WriteForm
        content={content}
        setContent={setContent}
        isdisabled={disabled}
      ></WriteForm>

      {!disabled ? (
        <Row>
          <Col flex={8}></Col>
          <Col>
            <br></br>
            <Button type="primary" onClick={completeLogic}>
              {button}
            </Button>
          </Col>
        </Row>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DocsList;