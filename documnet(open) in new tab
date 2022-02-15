      {item.reports &&
                    item?.reports?.map((url, i) => (
                      <div className="Files">
                        <div className="FileContent">
                          <Avatar
                            icon={<Icon type="file-text" theme="filled" />}
                          />
                          {/* <h3>{url.reportType}</h3> */}
                          <h3>
                            <Tooltip
                              overlayClassName="DashboardHealthRecord"
                              title={url?.substring(url?.lastIndexOf("/") + 1)}
                            >
                              <span>
                                {url
                                  ?.substring(url?.lastIndexOf("/") + 1)
                                  ?.slice(0, 10)}{" "}
                                {url?.substring(url?.lastIndexOf("/") + 1)
                                  ?.length >= 11 && "..."}
                              </span>
                            </Tooltip>
                          </h3>
                        </div>
                        <a href={process.env.PUBLIC_URL + url} target="_blank">
                          <Icon type="download" />
                        </a>
                      </div>
                    ))}
