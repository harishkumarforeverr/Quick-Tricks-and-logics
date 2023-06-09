   <div 
                
                className="searchBardrop">
                  <Select
                    optionFilterProp="children"
                    showSearch
                    placeholder="Sort by Category"
                    style={{ width: "100%" }}
                  >
                    <Option key={"AEC1"}>AEC (Absolute Eosinophil Count) Test</Option>
                    <Option key={"ACTH1"}>ACTH Adreno Corticotropic Hormone</Option>
                    <Option key={"Albumin1"}>Albumin Test</Option>
                    <Option key={"Aldolase1"}>Aldolase Test</Option>
                    <Option key={"Aldosterone1"}>Aldosterone</Option>
                    <Option key={"ALP1"}>ALP (Alkaline Phosphate) Test</Option>
                    <Option key={"Allergy1"}>Allergy Food (Vegetarian)</Option>
                  </Select>
                  <SearchOutlined
                  className="SearchBarIcon"
                    onClick={() => {
                      setViewReportModal(true);
                    }}
                  />
                </div>










css
.searchBardrop {
  position: relative;
  // background-color: red;
  .ant-select-arrow {
    display: none;
  }
  .SearchBarIcon {
    position: absolute;
    top: 35.3%;
    right: 3%;
    background-color: #2d80b5;
    color: white;
    width: 3.7rem;
    height: 3rem;
    border-radius: 50%;
    font-size: 1.479rem;
    display: grid;
    justify-content: center;
    align-content: center;
  }
  .ant-select-focused .ant-select-selector,
  .ant-select-selector:focus,
  .ant-select-selector:active,
  .ant-select-open .ant-select-selector {
    border-color: #e6f2fb !important;
    border: none !important;
    box-shadow: none !important;
  }
  .ant-select-selection {
    box-shadow: none !important;
  }
  .ant-select-selector {
    border: none !important;
    border-radius: 5rem !important;
    height: 4rem !important;
    background-color: #e6f2fb !important;
    .ant-select-selection-search-input,
    .ant-select-selection-placeholder,
    .ant-select-selection-item {
      transform: translateY(4.3px) !important;
    }
  }

  width: 100%;

  .ant-select {
    width: 100%;
    height: 3.5rem;
    font-size: 1.2rem;
    font-weight: 400;
    color: #000;
    background-color: #f8fbff;
    .ant-select-selection {
      border: none;
      height: 4rem;
      color: #000;
      opacity: 0.65;
      background-color: unset;
    }
    .ant-select-selection-selected-value {
      line-height: 4rem;
    }
    .ant-select-selection__placeholder {
      line-height: 3.3rem;
      height: 3rem;
      color: #000;
      opacity: 0.9;
      font-weight: 600;
      font-size: 1.25rem;
    }
  }
}






