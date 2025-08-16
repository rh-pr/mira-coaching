import { useState, ChangeEvent, FormEvent, useContext } from 'react';
import { addReview } from '../api/reviewsAPI';
import { ReviewType } from '../types/main';
import { reviewPlaceholder, emojies } from '../constants/main'; 
import { MainContext } from '../context/MainContext';

export const useReviewForm = () => {
  const [formData, setFormData] = useState<ReviewType>(reviewPlaceholder);

  const context = useContext(MainContext)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const numericValue = name === 'note' ? parseInt(value) : 0;

    setFormData(prevData => ({
      ...prevData,
      [name]: value,
      radio: emojies[numericValue - 1],
    }));
  };

  const handleReview = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    context?.setSendReview(true);
    context?.setIsWritingNewReview(false);

    const result = await addReview(formData);

    if (!result) {
      context?.setSendingStatus(false);
    } else {
      context?.setSendingStatus(true);
      context?.setReviews((prevReviews) => [formData, ...(prevReviews || [])])
      setFormData(reviewPlaceholder);
    }
  };

  const closeForm = () => {
    context?.setIsWritingNewReview(false);
  };

  return {
    formData,
    handleChange,
    handleReview,
    closeForm,
  };
};
