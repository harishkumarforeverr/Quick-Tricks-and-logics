
 .ant-popover-content {
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 33px #ffd2bf;
    opacity: 1;
    border-radius: 20px;
  }
  .ant-popover-inner {
    border-radius: 20px;
    h4 {
      font-size: 1.27rem;
      margin-bottom: 1rem;
      color: #39383b !important;
      white-space: nowrap;
      text-decoration: none !important;
      span {
        margin-right: 0.3rem;
      }
      @mixin commonfontSizeforIcons {
        font-size: 1.56rem;
      }
      .anticon-check-circle,
      .anticon-message {
        color: #f06e38;
        @include commonfontSizeforIcons();
      }
      .anticon-close-circle {
        color: #00000078;
        @include commonfontSizeforIcons();
      }
    }
  }
  
  
  
  
  
  
  
  
  
/// jsx
  <Popover
        getPopupContainer={trigger => trigger.parentNode}
          placement="left"
          // title={<MoreOutlined />}
          // visible="true"
          content={
            <div>
              <h4>
                11
              </h4>
            </div>
          }
          trigger="click"
        >
          <MoreOutlined />
        </Popover>



        // changes