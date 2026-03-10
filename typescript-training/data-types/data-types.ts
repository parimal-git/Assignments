//declaration variable:dataType = value;

  //Data types in TypeScript are divided into two different categories.
  // 1. Primitive datatypes (immutable)
  // 2. Non-primitive datatypes (mutable)

  /**********************************************/
  /*******PRIMITIVE DATA TYPES IN TYPESCRIPT************/
  /**********************************************/

  // 1. Number ==> The data type used to store number with/without decimals
  let num1: number = 10;
  let num2: number = 12.23187;
  console.log(num1);
  console.log(num2);

  // 2. String ==> The data type used to store collection of chars
  let empName: string = 'Bharath';
  let location: string = "Hyde'r'abad";
  let company: string = `Microsoft`;
  console.log(empName);
  console.log(location);
  console.log(company);

  //3.boolean ==>> The data type used to store true / false values 
  let x:number = 10;
  let y:number = 20;
  let z:boolean = x > y;

  //4. null ==> the data type used to store null values 
  let n: null = null;
  console.log(n);

  // undefined ==>> the data type used to store no value / undefined
  let u: undefined;
  console.log(u);

  // union ==> Union represents more than one data type assigned to the variable

  let empAddress : string | number | boolean ="123 Main Road";
  console.log(empAddress);

  empAddress = 123456;
  console.log(empAddress);

  empAddress = true;
  console.log(empAddress);


  // any ==> The data type used to store any type of value 

  let data: any = 10;
  console.log(data);

  data = "hello";

  data = true;
  console.log(data);
  
