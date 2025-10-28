import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { programs } from '../../data/programs';
import { packagePlans } from '../../data/packages';
import { EMAILJS_CONFIG } from '../../config/emailjs';

interface RegistrationModalProps {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  country: string;
  whatsappNumber: string;
  email: string;
  selectedProgram: string;
  selectedPackage: string;
  transferImage: File | null;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ open, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    country: '',
    whatsappNumber: '',
    email: '',
    selectedProgram: '',
    selectedPackage: '',
    transferImage: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  if (!open) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Create form data for email submission
      const selectedPackageData = packagePlans.find(p => p.title === formData.selectedPackage);

      // Prepare email data
      const emailData = {
        to_email: 'eslam3400@gmail.com',
        from_name: formData.fullName,
        full_name: formData.fullName,
        country: formData.country,
        whatsapp_number: formData.whatsappNumber,
        email: formData.email,
        selected_program: formData.selectedProgram,
        selected_package: formData.selectedPackage,
        package_price_usd: selectedPackageData?.priceUSD || 'N/A',
        package_price_egp: selectedPackageData?.priceEGP || 'N/A',
        message: `New registration from ${formData.fullName}\n\nDetails:\n- Country: ${formData.country}\n- WhatsApp: ${formData.whatsappNumber}\n- Email: ${formData.email}\n- Program: ${formData.selectedProgram}\n- Package: ${formData.selectedPackage}\n- Package Price: $${selectedPackageData?.priceUSD} / ${selectedPackageData?.priceEGP} EGP\n\nTransfer image uploaded: ${formData.transferImage ? 'Yes' : 'No'}`,
      };

      // Send email using EmailJS
      // Note: You need to configure EmailJS with your actual credentials in src/config/emailjs.ts
      if (EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_EMAILJS_PUBLIC_KEY') {
        await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          emailData,
          EMAILJS_CONFIG.PUBLIC_KEY
        );
      } else {
        // For demo purposes, just log the data when EmailJS is not configured
        console.log('EmailJS not configured. Registration data:', emailData);
        console.log('Transfer Image:', formData.transferImage);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
      }

      setSubmitMessage('تم إرسال طلبك بنجاح! سنتواصل معك قريباً');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: '',
          country: '',
          whatsappNumber: '',
          email: '',
          selectedProgram: '',
          selectedPackage: '',
          transferImage: null,
        });
        setSubmitMessage('');
        onClose();
      }, 3000);

    } catch (error) {
      console.error('Submission error:', error);
      setSubmitMessage('حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div 
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">ابدأ رحلتك معنا اليوم</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition duration-200"
            aria-label="Close modal"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        {/* Form */}
        <div className="p-6">
          {submitMessage && (
            <div className={`mb-6 p-4 rounded-lg text-center font-semibold ar ${
              submitMessage.includes('بنجاح') 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {submitMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2 ar text-right">
                الاسم ثلاثي <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ar text-right"
                placeholder="أدخل اسمك الثلاثي"
              />
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2 ar text-right">
                البلد المقيم فيها <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ar text-right"
                placeholder="أدخل البلد المقيم فيها"
              />
            </div>

            {/* WhatsApp Number */}
            <div>
              <label htmlFor="whatsappNumber" className="block text-sm font-medium text-gray-700 mb-2 ar text-right">
                رقم الهاتف (واتساب) <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="whatsappNumber"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+20 1234567890"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 ar text-right">
                الايميل <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="example@email.com"
              />
            </div>

            {/* Program Selection */}
            <div>
              <label htmlFor="selectedProgram" className="block text-sm font-medium text-gray-700 mb-2 ar text-right">
                البرنامج <span className="text-red-500">*</span>
              </label>
              <select
                id="selectedProgram"
                name="selectedProgram"
                value={formData.selectedProgram}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ar text-right"
              >
                <option value="">اختر البرنامج</option>
                {programs.map((program) => (
                  <option key={program.title} value={program.title}>
                    {program.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Package Selection */}
            <div>
              <label htmlFor="selectedPackage" className="block text-sm font-medium text-gray-700 mb-2 ar text-right">
                اسم الباقة <span className="text-red-500">*</span>
              </label>
              <select
                id="selectedPackage"
                name="selectedPackage"
                value={formData.selectedPackage}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ar text-right"
              >
                <option value="">اختر الباقة</option>
                {packagePlans.map((pkg) => (
                  <option key={pkg.id} value={pkg.title}>
                    {pkg.title} - ${pkg.priceUSD} / {pkg.priceEGP} EGP
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition duration-300 transform hover:scale-105 ar ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    جاري الإرسال...
                  </div>
                ) : (
                  'إرسال الطلب'
                )}
              </button>
            </div>
          </form>

          {/* Additional Info */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-start">
              <i className="fas fa-info-circle text-blue-500 mt-1 mr-3"></i>
              <div className="text-sm text-blue-800 ar text-right">
                <p className="font-semibold mb-1">ملاحظة مهمة:</p>
                <p>سيتم التواصل معك خلال 24 ساعة من تقديم الطلب. تأكد من صحة البيانات المدخلة.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
