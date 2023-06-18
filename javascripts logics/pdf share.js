THEME is ===> 
1) we will get blob object of the pdf which react-pdf/render will return us and then
2) i can captured thet object and passed into the new File() which html5 provide us the , these will return a pure pdf object back to us
3) then i send that file to s3 bucket and got the url of that pdf , hahahhahahahhah that much only



import S3 from "react-aws-s3";
import moment from "moment"; 
import { PDFDownloadLink, pdf, Document } from "@react-pdf/renderer";     

 <PDFDownloadLink
                    document={<Details value={tests} />}
                    fileName="view.pdf"
                  >
                    {(propss) => {
                      var file = new File([propss.blob], "pdfname.pdf", {
                        lastModified: new Date().getTime(),
                        type: "application/pdf",
                      });
                      const newFileName =
                        file?.name.replace(/\..+$/, "") + moment().unix();
                      const config = {
                        bucketName: "ub-dev-image-uploader",
                        dirName: hostid /* optional */,
                        region: "ap-south-1",
                        accessKeyId: "AKIAUCJ3HQRT2EX5ETET",
                        secretAccessKey:
                          "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",
                      };
                      const ReactS3Client = new S3(config);
                      ReactS3Client.uploadFile(file, newFileName, {}).then(
                        (data) => {
                          console.log("datadatadata", data.location);
                          if (data.location) {
                            setMyPdfFileUrl(data.location);
                          }
                        }
                      );
                      const { loading, error } = propss;
                      return (
                        <Button
                          onClick={() => {
                            console.log("working");
                            setenableShareBtn(true);
                          }}
                        >
                          {loading || error ? (
                            <Spin style={{ paddingTop: "8px" }} />
                          ) : (
                            <div className="button">
                              <Icon
                                style={{
                                  opacity: testdetails === undefined ? 0.5 : 1,
                                }}
                                type="download"
                              />
                              Download
                            </div>
                          )}
                        </Button>
                      );
                    }}
                  </PDFDownloadLink>
