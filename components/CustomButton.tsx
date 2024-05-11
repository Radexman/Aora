import { Text, TouchableOpacity } from 'react-native';

type CustomButtonProps = {
	title: string;
	handlePress: () => void;
	containerStyles: string;
	textStyles?: string;
	isLoading?: boolean;
};

const CustomButton = ({ title, containerStyles, handlePress, isLoading, textStyles }: CustomButtonProps) => {
	return (
		<TouchableOpacity
			onPress={handlePress}
			activeOpacity={0.7}
			className={`${containerStyles} ${
				isLoading && 'opacity-50'
			} bg-secondary-100 rounded-xl min-h-[62px] justify-center items-center`}
		>
			<Text className={`${textStyles}text-primary font-psemibold text-lg`}>{title}</Text>
		</TouchableOpacity>
	);
};

export default CustomButton;
