import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

type Props = {
  slug: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const columns: GridColDef[] = [
  {
    field: "name",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "cpf",
    type: "string",
    headerName: "Document",
    width: 200,
  },
  {
    field: "gender",
    type: "string",
    headerName: "Gender",
    width: 200,
  },
  {
    field: "cellPhone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "dateOfBirth",
    headerName: "Date Of Birth",
    width: 200,
    type: "string",
  },
  {
    field: "city",
    headerName: "City",
    width: 200,
    type: "string",
  },
  {
    field: "street",
    headerName: "street",
    width: 200,
    type: "string",
  },
  {
    field: "number",
    headerName: "Number",
    width: 200,
    type: "number",
  },
  {
    field: "district",
    headerName: "District",
    width: 200,
    type: "string",
  },
  {
    field: "state",
    headerName: "State",
    width: 200,
    type: "string",
  },
  {
    field: "country",
    headerName: "Country",
    width: 200,
    type: "string",
  },
  {
    field: "zipCode",
    headerName: "Zipcode",
    width: 200,
    type: "string",
  }
];

const Add = (props: Props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    cellPhone: '',
    cpf: '',
    dateOfBirth: '',
    street: '',
    number: '',
    district: '',
    state: '',
    country: '',
    zipCode: '',
    city: ''    
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutation.mutate();

    props.setOpen(false);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    
    mutationFn: () => {
      const data = {
        name: formData.name,
        email: formData.email,
        gender: formData.gender,
        cellPhone: formData.cellPhone,
        cpf: formData.cpf,
        dateOfBirth: formData.dateOfBirth,
        address: {
          street: formData.street,
          number: Number(formData.number),
          district: formData.district,
          state: formData.state,
          country: formData.country,
          zipCode: formData.zipCode,
          city: formData.city
        }
      }
      console.log(data)
      return fetch(`https://customers-1u6z.onrender.com/createCustomer`, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries([`all${props.slug}s`]);
    },
  });

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input name={column.field} type={column.type} placeholder={column.field} onChange={handleInputChange}/>
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
