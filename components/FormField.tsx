import { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { icons } from '../constants';

type FormFieldProps = {
	title: string;
	value: string;
	otherStyles: string;
	keyboardType?: string;
	placeholder?: string;
	handleChangeText: (text: string) => void;
};

const FormField = ({ title, value, otherStyles, keyboardType, placeholder, handleChangeText }: FormFieldProps) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<View className={`${otherStyles} space-y-2`}>
			<Text className='text-base text-gray-100 font-pmedium'>{title}</Text>
			<View className='w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary-100 items-center'>
				<TextInput
					value={value}
					placeholder={placeholder}
					placeholderTextColor='#7b7b8b'
					onChangeText={handleChangeText}
					secureTextEntry={title === 'Password' && !showPassword}
					className='w-full text-white font-psemibold text-base p-4'
				/>
				{title === 'Password' && (
					<TouchableOpacity
						className='absolute right-4 top-4'
						onPress={() => setShowPassword(!showPassword)}
					>
						<Image
							className='w-7 h-7'
							source={!showPassword ? icons.eye : icons.eyeHide}
						/>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

export default FormField;
