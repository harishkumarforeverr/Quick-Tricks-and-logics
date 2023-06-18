.TopTestsDiagnosticsTooltip .ant-tooltip-inner {
  color: var(--half-white) !important;
  background-color: var(--primary) !important;
}

         <Tooltip overlayClassName="TopTestsDiagnosticsTooltip" title={street}>
            <span>
              {street?.slice(0, 67)}
              {street?.length >= 67 && "..."}
            </span>
          </Tooltip>
