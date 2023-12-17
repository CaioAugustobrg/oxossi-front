/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  Tooltip,
  Typography,
} from 'antd';
import apiService from '../../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import searchContext from '../../context';
import fieldsContext from '../../context/field';
import { StyledForm, Title } from './styles';
const { RangePicker } = DatePicker;
// interface DataNodeType {
//   value: string;
//   label: string;
//   children?: DataNodeType[];
// }

// const residences: CascaderProps<DataNodeType>['options'] = [
//   {
//     value: 'zhejiang',
//     label: 'Zhejiang',
//     children: [
//       {
//         value: 'hangzhou',
//         label: 'Hangzhou',
//         children: [
//           {
//             value: 'xihu',
//             label: 'West Lake',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: 'jiangsu',
//     label: 'Jiangsu',
//     children: [
//       {
//         value: 'nanjing',
//         label: 'Nanjing',
//         children: [
//           {
//             value: 'zhonghuamen',
//             label: 'Zhong Hua Men',
//           },
//         ],
//       },
//     ],
//   },
// ];

const rangeConfig = {
  rules: [{ type: 'array' as const, required: false}],
};

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
 
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const NewForm: React.FC = () => {
  const { setSearch } = useContext(searchContext)
  const { setField } = useContext(fieldsContext)
  const navigate = useNavigate();

  const onFinish = async (fieldsValue: any) => {
    const { 'range-picker': rangePickerValues, ...otherFields } = fieldsValue;
  
      try {
        let response;
        if (rangePickerValues && Array.isArray(rangePickerValues) && rangePickerValues.length === 2) {

          
          
          const years = rangePickerValues.map((dateString: string) => {
          return new Date(dateString).getFullYear();
        });
  
        const yearsPayload = {
          ...otherFields,
          datas: {
            anoInicial: years[0],
            anoFinal: years[1],
          },
        };
        console.log(yearsPayload)
        setField(yearsPayload);
        response = await apiService.post('/search', yearsPayload);
        setSearch(response?.data.searchThoseBooks);
        
  
        } else {
          response = await apiService.post('/search', fieldsValue);
          setField(fieldsValue);
          setSearch(response?.data.searchThoseBooks);

        }
        if (response?.status === 200) {
          navigate('/search');
        }
      } catch (error) {
        toast.error('Nenhum artigo encontrado');
        console.error(error);
      }
   
  };
  
  const [form] = Form.useForm();

  return (
    
    <StyledForm
      {...formItemLayout}
      form={form}
      name="register"
      size='large'
      onFinish={onFinish}

      
      scrollToFirstError
      
      >
        

       <Title>Buscador de artigos sobre o Brasil Colônia</Title> 
      <StyledForm.Item
      style={{}}
      name="temas"
      label="Tema"
      tooltip="Experimente buscar por política."
      rules={[
        {
            type: 'string',
            message: 'Esse não é um tema válido.',
          },
          {
            required: true,
            message: 'Por favor, insira o tema',
          },
        ]}
      >
        <Input />
      </StyledForm.Item>

      <StyledForm.Item 
      tooltip="Experimente buscar de 1555 até 1782"
      name="range-picker"
      label="Data"
      {...rangeConfig}>
        
      <RangePicker />

    </StyledForm.Item>
   
      <StyledForm.Item
        name="autores"
        label="Autor"
        //tooltip="What do you want others to call you?"
        rules={[{ required: false, whitespace: true }]}
      >
        <Input />
      </StyledForm.Item>

   

      <StyledForm.Item
        name="tematicas"
        label="Temática"
        rules={[{ required: false }]}
      >
        <Input  />
      </StyledForm.Item>

      <StyledForm.Item
        name="capitania"
        label="Capitania"
        rules={[{ required: false }]}
        >
        <Input  />
      </StyledForm.Item>

     

      <StyledForm.Item
        name="lugares"
        label="Lugares"
        rules={[{ required: false }]}
      >
        <Input  />
      </StyledForm.Item>

      <StyledForm.Item
        name="nomes"
        label="Nomes"
        rules={[{ required: false }]}
      >
        <Input  />
      </StyledForm.Item>
     
      <StyledForm.Item
        name="titulo"
        label="Título"
        rules={[{ required: false }]}
      >
        <Input  />
      </StyledForm.Item>


      <StyledForm.Item  {...tailFormItemLayout}>
        <Button style={{marginRight: '240px'}} type="primary" htmlType="submit">
          Pesquisar
        </Button>
        <Tooltip title="Veja um exemplo de busca">
          <Typography.Link href="/help/search">Precisa de ajuda ?</Typography.Link>
        </Tooltip>
      </StyledForm.Item>
        
    </StyledForm>
  );
};

export default NewForm;
