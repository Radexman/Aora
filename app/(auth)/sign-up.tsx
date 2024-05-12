import { useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../../components/FormField';
import { images } from '../../constants';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';

const SignUp = () => {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const submit = () => {};

	return (
		<SafeAreaView className='bg-primary h-full'>
			<ScrollView>
				<View className='w-full justify-center min-h-[85vh] px-4 my-6'>
					<Image
						source={images.logo}
						resizeMode='contain'
						className='w-[115px] h-[35px]'
					/>
					<Text className='text-2xl text-white font-semibold mt-10 font-psemibold'>Sign up to Aora</Text>
					<FormField
						title='Username'
						value={formData.username}
						otherStyles='mt-10'
						handleChangeText={(e) => setFormData({ ...formData, username: e })}
					/>
					<FormField
						title='Email'
						value={formData.email}
						otherStyles='mt-6'
						keyboardType='email-address'
						handleChangeText={(e) => setFormData({ ...formData, email: e })}
					/>
					<FormField
						title='Password'
						value={formData.password}
						otherStyles='mt-6'
						handleChangeText={(e) => setFormData({ ...formData, password: e })}
					/>
					<CustomButton
						title='Sign In'
						handlePress={submit}
						containerStyles='mt-6'
						isLoading={isSubmitting}
					/>
					<View className='justify-center pt-5 flex-row gap-2'>
						<Text className='text-lg text-gray-100 font-pregular'>Have an account already?</Text>
						<Link
							href='./sign-in'
							className='text-lg font-psemibold text-secondary'
						>
							Sign In
						</Link>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignUp;
