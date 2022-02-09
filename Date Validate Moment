 
 
 // these code for disbaling the past date from now
 disabledDate={(current) => {
                          let customDate = moment().format("YYYY-MM-DD");
                          return current && current < moment(customDate, "YYYY-MM-DD");
                          }} 
 
 
 // these code for disbaling the future datees
 <DatePicker
          placeholder={t("dob")}
          onChange={handleDobChange}
          disabledDate={(current) => {
          let customDate = moment().add(1,'days').format("YYYY-MM-DD");
         return (current) && (current) > moment((customDate), "YYYY-MM-DD");
        }}  
/>



/// to diable the past dates and enable the furture dates
 disabledDate={(d) =>
                  d.isAfter("anthi futher dates ani ardham") || d.isSameOrBefore("anthi current Date unndi")
                }





// to disable the from certain point and disbale the futhure Days
  disabledDate={(current) =>
     current <= moment(dob) || 
     current >= moment() 
   }
   
   here dob means from where u want to disable the Dates and at below of it moment() means to ddisbale all the futhure Days and here cureent meeans cureent Day
