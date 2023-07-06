import moment from "moment";
import axios from "axios";

export const blockInvalidChar = e =>
["e", "E", "+", "-","#","$","(","@",")"].includes(e.key) && e.preventDefault();

export const  funturedisabledDate=(current)=> {
    // Can not select days before today and today
    return current && current.valueOf() > Date.now();
  }
    export const getCurrentWeek=()=> {
      var currentDate = moment();

      var weekStart = currentDate.clone().startOf("isoWeek");
      // var weekEnd = currentDate.clone().endOf("isoWeek");

      var days = [];

      for (var i = 0; i <= 6; i++) {
        // days.push(moment(weekStart).add(i, 'days').format());

        days.push({
          day: new Date(moment(weekStart).add(i, "days").format()),
          date: new Date(moment(weekStart).add(i, "days").format()),
        });
      }
      return days;
    }
    export const getGeoInfo = async () => {
      try {
        const res = await axios.get("https://ipapi.co/json/");
        return res.data;
      } catch (error) {
        console.log(error);
      }
    };
    export const formatDisplayPhoneNumber=(phoneNumberString)=> {
      var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
      var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        var intlCode = '+1 ';
        return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
      }
      return null;
    }
    function formatPhoneNumber2(phone) {
      //normalize string and remove all unnecessary characters
      phone = phone.replace(/[^\d]/g, "");

      //check if number length equals to 10
      if (phone.length == 10) {
          //reformat and return phone number
          return `+1 ${phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}`;
      }

      return null;
  }
  export const formatinputPhoneNumber=(value)=> {
    // if input value is falsy eg if the user deletes the input, then just return
    if (!value) return value;

    // clean the input for any non-digit values.
    const phoneNumber = value.replace(/[^\d]/g, "");

    // phoneNumberLength is used to know when to apply our formatting for the phone number
    const phoneNumberLength = phoneNumber.length;

    // we need to return the value with no formatting if its less then four digits
    // this is to avoid weird behavior that occurs if you  format the area code to early
    if (phoneNumberLength < 4) return phoneNumber;

    // if phoneNumberLength is greater than 4 and less the 7 we start to return
    // the formatted number
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

    // finally, if the phoneNumberLength is greater then seven, we add the last
    // bit of formatting and return it.
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  }
  export const RemoveformatPhoneNumber=(value)=> {

    return value.replace(/[^\d]/g, '')
  }