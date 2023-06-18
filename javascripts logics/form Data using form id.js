   const id = this.getIdOfForm(categoryIndex, SubCategoryIndex);
    const form: any = document.getElementById(id);
 
    const formData: any = new FormData(form);
    let formProps = Object.fromEntries(formData);
  
    console.log("sssssssformPropssssssss", formProps);

    if (Object.values(formProps).filter((val) => val == "").length > 0) {
      console.log("please fill the error");
      return true;
    }
