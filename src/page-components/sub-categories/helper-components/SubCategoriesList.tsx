import { useState, useRef } from 'react';
import NoteToolbar from "@/page-components/note-toolbar/NoteToolbar";
import {
  Button,
  ButtonsContainer,
  FormColumn,
  FormRow,
  FormContainer,
  HelperText,
  ImagePreview,
  Input,
  InputContainer,
  Label,
  RemoveLink,
  SecondaryButton,
  StyledButton,
  StyledHr,
  UploadArea,
  UploadIcon,
  UploadText,
} from '@/page-components/categories-tabs/helper-component/CategoriesList.styled';
import { MdCloudUpload } from "react-icons/md";
import { IoIosSave } from "react-icons/io";
import { FaUndo } from "react-icons/fa";
import { useCreateCategories, useCreateSubCategories } from '@/hooks/useInventory';
import { CategoryProps } from '@/types/inventory';


interface CategoriesListProps {
  category?: CategoryProps;
  onSave: (category: CategoryProps) => void;
} 


const SubCategoriesList: React.FC<CategoriesListProps> = ({ category, onSave }) => {
  const [image, setImage] = useState<string | null>(category?.image || null);
  const [name, setName] = useState<string>(category?.name || '');
  const [description, setDescription] = useState<string>(category?.description || '');
  const [weightage, setWeightage] = useState<string>(category?.weightage || '');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { mutate: saveCategory } = useCreateSubCategories();

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (event: React.MouseEvent) => {
    event.stopPropagation();
    setImage(null);
  };

  const handleSaveCategory = () => {
    if (!name || !description || !weightage) {
      alert('Please fill in all required fields.');
      return;
    }
    const payload: CategoryProps = {
        id: category?.id || '',
        name,
        description,
        weightage,
        image,
        updated_at: '',
        updatedAt: '',
        category_name: ''
    };

    saveCategory(payload, {
      onSuccess: () => {
        setName('');
        setDescription('');
        setWeightage('');
        setImage(null);
        onSave(payload);
      },
      onError: (error) => {
        console.error('Error saving category:', error);
      },
    });
  };

  const handleCancel = () => {
    setName('');
    setDescription('');
    setWeightage('');
    setImage(null);

    window.location.reload();
  };

  const hasImage = image !== null;

  return (
    <>
      <FormContainer>
        <FormColumn>
          <FormRow>
            <Label htmlFor="name">Name *</Label>
            <InputContainer>
              <Input
                type="text"
                placeholder="Insert Name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <HelperText>Insert Name</HelperText>
            </InputContainer>
          </FormRow>

          <FormRow>
            <Label htmlFor="description">Description *</Label>
            <InputContainer>
              <NoteToolbar value={description} onChange={setDescription} />
              <HelperText>Insert Description</HelperText>
            </InputContainer>
          </FormRow>

          <FormRow>
            <Label htmlFor="weightage">Weightage *</Label>
            <InputContainer>
              <Input
                type="text"
                placeholder="Enter Weightage"
                id="weightage"
                value={weightage}
                onChange={(e) => setWeightage(e.target.value)}
              />
              <HelperText>Enter Weight</HelperText>
            </InputContainer>
          </FormRow>
        </FormColumn>

        <div>
          <FormRow>
            <Label htmlFor="images">Image</Label>
            <InputContainer>
              <UploadArea hasImage={hasImage} onClick={handleUploadClick}>
                {!hasImage && (
                  <>
                    <UploadIcon>
                      <MdCloudUpload />
                    </UploadIcon>
                    <UploadText>Drop files here to upload</UploadText>
                  </>
                )}
                {hasImage && (
                  <div>
                    <ImagePreview>
                      <img src={image} alt="Uploaded Preview" />
                    </ImagePreview>
                    <RemoveLink onClick={handleRemoveImage} href={''}>
                      Remove file
                    </RemoveLink>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
              </UploadArea>
              <HelperText>Insert image in SVG format</HelperText>
            </InputContainer>
          </FormRow>
          <StyledButton variant="outlined">From Media</StyledButton>
        </div>
      </FormContainer>
      <StyledHr />
      <ButtonsContainer>
        <Button variant="outlined" onClick={handleSaveCategory}>
          <IoIosSave />
          Save Category
        </Button>
        <SecondaryButton onClick={handleCancel}>
          <FaUndo />
          Cancel
        </SecondaryButton>
      </ButtonsContainer>
    </>
  );
};
export default SubCategoriesList;