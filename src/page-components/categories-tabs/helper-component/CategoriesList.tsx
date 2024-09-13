"use client";

import NoteToolbar from "@/page-components/note-toolbar/NoteToolbar";
import {
  Button,
  ButtonsContainer,
  FormColumn,
  FormContainer,
  FormRow,
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
} from "./CategoriesList.styled";
import { MdCloudUpload } from "react-icons/md";
import { IoIosSave } from "react-icons/io";
import { FaUndo } from "react-icons/fa";
import { useRef, useState } from "react";


const CategoriesList = () => {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const hasImage = image !== null;
  return (
    <>
      <FormContainer>
        <FormColumn>
          <FormRow>
            <Label htmlFor="name">Name *</Label>
            <InputContainer>
              <Input type="text" placeholder="Insert Name" id="name" />
              <HelperText>Insert Name</HelperText>
            </InputContainer>
          </FormRow>

          <FormRow>
            <Label htmlFor="description">Description *</Label>
            <InputContainer>
              <NoteToolbar />
              <HelperText>Insert Description</HelperText>
            </InputContainer>
          </FormRow>

          <FormRow>
            <Label htmlFor="weightage">Weightage *</Label>
            <InputContainer>
              <Input type="text" placeholder="Enter Weightage" id="weightage" />
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
                    <RemoveLink onClick={handleRemoveImage} href={""}>
                      Remove file
                    </RemoveLink>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
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
        <Button variant="outlined">
          <IoIosSave />
          Save Category
        </Button>
        <SecondaryButton>
          <FaUndo />
          Cancel
        </SecondaryButton>
      </ButtonsContainer>
    </>
  );
};

export default CategoriesList;
