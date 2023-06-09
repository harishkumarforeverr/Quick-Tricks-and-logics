  <div className="ProductsList_header">
            <Row>
              <Col span={12}>
                <h3>CUSTOMER PAYMENTS</h3>
                <Divider />
              </Col>
              <Col className="commonHeader" span={17}>
                <Col>
                  <div className="AddProduct_btn">
                    <CustomButton
                      type="primary"
                      icon={<PlusIcon />} 
                      onClick={openPaymentsInfo}
                    >
                     Create Customer Payments
                    </CustomButton>
                  </div>
                </Col>
                <Col>
                  <HeaderSideContent />
                </Col>
              </Col>
            </Row>
          </div>
          
          
          
          
          
          
          
          
          
          
          
            .ProductsList_header {
    padding: 1.1% 3%;
    .commonHeader {
      display: flex;
      justify-content: flex-end;
      justify-items: flex-end;
      position: fixed;
      right: 3%;
      z-index: 10;
    }
    h3 {
      color: var(--primaryOrange);
      font-size: 2.1rem;
      font-weight: 600;
      margin-bottom: 0.3rem;
    }
  
    .ant-divider-horizontal {
      border-top-width: 3.5px;
      border-top-color: var(--primaryOrange);
      border-radius: 50px;
      margin: 0;
      width: 25%;
      min-width: 25%;
      margin-left: 4%;
    }
  
    .HomePage-header_intro {
      padding-right: 1%;
      justify-content: flex-end;
      padding-left: 0%;
      .ant-input-group-wrapper {
        display: none;
      }
      .ant-badge {
        width: 5rem;
        margin-right: 3rem;
      }
    }
    .AddProduct_btn {
      text-align: right;
      margin-right: 4rem;
      .ant-btn { 
        color: var(--white);
        border: none;
        border-top-left-radius: 20px;
        border-bottom-right-radius: 20px;
        font-size: 1.25rem;
        padding-left: 3%;
        padding-right: 6%;
        padding-top: 0%; 
        height: 3.5rem; 
        font-weight: 500;
        .plus-icon {
          margin-right: 1rem;
          margin-top: 0.7rem;
        }
        &:hover {
          border-color: var(--primaryOrange);
        }
      }
    }
  }
          
