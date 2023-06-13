// https://stackblitz.com/edit/react-2hgyfe?file=index.js
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Calendar, Select, Radio, Col, Row } from 'antd';

const { Group, Button } = Radio;

function onPanelChange(value, mode) {
  console.log(value, mode);
}

ReactDOM.render(
  <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
    <Calendar
      dateCellRender={(e) => {
        console.log('harish', e);
      }}
      fullscreen={false}
      headerRender={({ value, type, onChange, onTypeChange }) => {
        const start = 0;
        const end = 12;
        const monthOptions = [];

        const current = value.clone();
        const localeData = value.localeData();
        const months = localeData.monthsShort();
        const weekdays = localeData.weekdaysShort().map((day) => day.charAt(0));

        for (let index = start; index < end; index++) {
          monthOptions.push(
            <Select.Option className="month-item" key={`${index}`}>
              {months[index]}
            </Select.Option>
          );
        }
        const month = value.month();

        const year = value.year();
        const options = [];
        for (let i = year - 10; i < year + 10; i += 1) {
          options.push(
            <Select.Option key={i} value={i} className="year-item">
              {i}
            </Select.Option>
          );
        }
        return (
          <div style={{ padding: 10 }}>
            <div style={{ marginBottom: '10px' }}>Custom header </div>
            <Row type="flex" justify="space-between">
              <Col>
                <Group
                  size="small"
                  onChange={(e) => onTypeChange(e.target.value)}
                  value={type}
                >
                  <Button value="month">Month</Button>
                  <Button value="year">Year</Button>
                </Group>
              </Col>
              <Col>
                <Select
                  size="small"
                  dropdownMatchSelectWidth={false}
                  className="my-year-select"
                  onChange={(newYear) => {
                    const now = value.clone().year(newYear);
                    onChange(now);
                  }}
                  value={String(year)}
                >
                  {options}
                </Select>
              </Col>
              <Col>
                <Select
                  size="small"
                  dropdownMatchSelectWidth={false}
                  value={String(month)}
                  onChange={(selectedMonth) => {
                    const newValue = value.clone();
                    newValue.month(parseInt(selectedMonth, 10));
                    onChange(newValue);
                  }}
                >
                  {monthOptions}
                </Select>
              </Col>
            </Row>
            <Row
              type="flex"
              justify="space-between"
              style={{ marginTop: '10px' }}
            >
              {weekdays.map((day, index) => (
                <Col key={index} className="calendar-day">
                  {day}
                </Col>
              ))}
            </Row>
          </div>
        );
      }}
      onPanelChange={onPanelChange}
    />
  </div>,
  document.getElementById('container')
);
