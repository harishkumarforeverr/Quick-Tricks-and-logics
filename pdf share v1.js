
import S3 from "react-aws-s3";
import moment from "moment";



  const [fileUploaded, setfileUploaded] = useState("");

  const fileUploadRequest = ({ file }) => {
    const newFileName = "document" + moment().unix();
    const config = {
      bucketName: "ub-dev-image-uploader",
      dirName: "hostid" /* optional */,
      region: "ap-south-1",
      accessKeyId: "AKIAUCJ3HQRT2EX5ETET",
      secretAccessKey: "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",
    };
    const ReactS3Client = new S3(config);
    ReactS3Client.uploadFile(file, newFileName, {}).then((data) => {
      if (data.location) {
        console.log(data.location);
        setfileUploaded(data.location);
      }
    });
  };
  const uploadButton = (
    <div>
      <Icon type={"plus"} />
      <div className="ant-upload-text">Upload</div>
    </div>
  );
  const UploaderJSX = (
    <Upload
      name="avatar"
      className="avatar-uploader"
      listType="picture-card"
      accept={
        ".jpg,.png,.pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      }
      showUploadList={false}
      customRequest={fileUploadRequest}
    >
      {false ? (
        <img src={"imageUrl"} alt="avatar" style={{ width: "100%" }} />
      ) : (
        uploadButton
      )}
    </Upload>
  );
