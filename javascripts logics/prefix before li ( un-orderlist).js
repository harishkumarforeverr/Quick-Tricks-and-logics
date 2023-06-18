   ul {
        list-style: none;
        li {
          position: relative;
          margin-left: 2.5%;
          color: #464646;
          font-size: 1.3rem;
          opacity: 0.8;
          font-weight: 600;
          margin-bottom: 0.7rem;
        }
        li::before {
          overflow: visible;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translate(-180%, -50%);
          content: "\2022";
          color: black;
          font-weight: bold;
          font-size: 2.7rem;
        }
      }
