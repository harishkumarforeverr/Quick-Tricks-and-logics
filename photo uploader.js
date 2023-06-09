import React, { useState, useEffect } from "react";
import { Select, Input, Switch, Button, Modal, message, Upload } from "antd";
import {
  CloseOutlined,
  CloudUploadOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";


  const [filedata, setfiledata] = useState();
  const [uploader, setuploader] = useState({});


  const fileUploadRequest = ({ file }) => {
    setfiledata(file);
  };





  const handleupload = (info, key) => {
    if (filedata && filedata.size <= 5000000) {
      const newFileName = filedata?.name.replace(/\..+$/, "");
      const config = {
        bucketName: "ub-provider-image-uploader",
        dirName: "host" /* optional */,
        region: "us-west-1",
        accessKeyId: "AKIAW7CW6QVRSTEZBUOO",
        secretAccessKey: "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",
      };
      const ReactS3Client = new S3(config);
      ReactS3Client.uploadFile(filedata, newFileName).then((data) => {
        if (data.status === 204) {
          const { location } = data;
          setuploader((prev) => ({
            ...prev,
            [key]: location,
          }));
        } else {
          console.log("fail");
        }
      });
    }
  };
  
  
  
  
  
  
  
  


              <Upload
                disabled={uploader.one}
                multiple={false}
                name="avatar"
                accept={"image/*"}
                customRequest={fileUploadRequest}
                onChange={(e) => handleupload(e, "one")}
              >
                <CloudUploadOutlined />
              </Upload>
              
              
              
              
