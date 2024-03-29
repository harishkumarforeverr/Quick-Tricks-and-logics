     .ant-table-pagination.ant-pagination {
    display: flex;
    justify-content: center;
    margin-top: 6%;
  }

  .ant-pagination {
    float: unset !important;
    text-align: center;
    .ant-pagination-item-active {
      background: #f06e38;
      border-color: #f06e38;
      border-radius: 50%;
    }
    .ant-pagination-item a {
      color: var(--black-fourth);
      padding-top: 1px;
      padding-bottom: 1px;
      &:hover {
        color: #f06e38;
      }
    }
    .ant-pagination-item-active a {
      color: white;
      &:hover {
        color: white;
      }
    }
    .ant-pagination-prev {
      margin-right: 1rem !important;
    }
    .ant-pagination-next {
      margin-left: 1rem !important;
    }
    .ant-pagination-prev .ant-pagination-item-link,
    .ant-pagination-next .ant-pagination-item-link {
      background: white !important;
      border-radius: 50%;
      box-shadow: 0 0.6px 2px 0.25px;
    }
    .ant-pagination-prev:focus .ant-pagination-item-link,
    .ant-pagination-next:focus .ant-pagination-item-link,
    .ant-pagination-prev:hover .ant-pagination-item-link,
    .ant-pagination-next:hover .ant-pagination-item-link {
      color: #000000a6;
    }
    .ant-pagination-item:not(.ant-pagination-item-active) {
      border-radius: 50%;
    }
    .anticon {
      vertical-align: -1px;
      color: #bfbfbf;
    }
  }
        
        
        
        
        @media only screen and (max-width: 56.25em) {
          .ant-pagination {
            float: unset !important;
            text-align: center;
            .ant-pagination-item-active {
              background: $primary;
              border-color: $primary;
              border-radius: 50%;
            }
            .ant-pagination-item a {
              color: var(--black-fourth);
              padding-top: 1px;
              padding-bottom: 1px;
              font-family: var(--Book);
              &:hover {
                color: $primary;
              }
            }
            .ant-pagination-item-active a {
              color: $white;
              &:hover {
                color: $white;
              }
            }
            .ant-pagination-prev {
              margin-right: 1rem !important;
            }
            .ant-pagination-next {
              margin-left: 1rem !important;
            }
            .ant-pagination-prev .ant-pagination-item-link,
            .ant-pagination-next .ant-pagination-item-link {
              background: $white !important;
              border-radius: 50%;
              box-shadow: 0 0.6px 2px 0.25px;
            }
            .ant-pagination-prev:focus .ant-pagination-item-link,
            .ant-pagination-next:focus .ant-pagination-item-link,
            .ant-pagination-prev:hover .ant-pagination-item-link,
            .ant-pagination-next:hover .ant-pagination-item-link {
              color: var(--black-eight);
            }
            .ant-pagination-item:not(.ant-pagination-item-active) {
              border-radius: 50%;
            }
            .anticon {
              vertical-align: -1px;
              color: var(--ash-fivth);
            }
          }
        }
        
        
        @media only screen and (max-width: 37em) {
          .ant-pagination {
            float: unset !important;
            text-align: center;
            .ant-pagination-item-active {
              background: $primary;
              border-color: $primary;
              border-radius: 50%;
            }
            .ant-pagination-item a {
              font-size: 1.5rem;
              color: var(--black-fourth);
              padding-top: 0px;
              padding-bottom: 1px;
              font-family: var(--Book);
              &:hover {
                color: $primary;
              }
            }
            .ant-pagination-item {
              // width: 2.5rem;
              height: 2.8rem;
            }
            .ant-pagination-item-active a {
              color: $white;
              &:hover {
                color: $white;
              }
            }
            .ant-pagination-prev {
              margin-right: 1rem !important;
            }
            .ant-pagination-next {
              margin-left: 1rem !important;
            }
            .ant-pagination-prev .ant-pagination-item-link,
            .ant-pagination-next .ant-pagination-item-link {
              background: $white !important;
              border-radius: 50%;
              box-shadow: 0 0.6px 2px 0.25px;
            }
            .ant-pagination-prev:focus .ant-pagination-item-link,
            .ant-pagination-next:focus .ant-pagination-item-link,
            .ant-pagination-prev:hover .ant-pagination-item-link,
            .ant-pagination-next:hover .ant-pagination-item-link {
              color: var(--black-eight);
            }
            .ant-pagination-item:not(.ant-pagination-item-active) {
              border-radius: 50%;
            }
            .anticon {
              vertical-align: -1px;
              color: var(--ash-fivth);
            }
          }
        }
