export type InputProps = React.ComponentPropsWithoutRef<"input"> & {
  label?: string;
  icon?: React.ReactNode;
};

export default function Input({label, icon, ...rest}: InputProps): JSX.Element {
  return (
    <div className='max-w-md px-4 mx-auto mt-12'>
      {label && (
        <label htmlFor={rest.id} className='block py-1 text-gray-500 text-xs'>
          {label}
        </label>
      )}
      <div className='flex items-center text-slate-700 border rounded-md focus-within:border-indigo-600 transition duration-200'>
        {icon && (
          <div className='px-3 py-2.5 rounded-l-md bg-gray-50 border-r'>
            {icon}
          </div>
        )}
        <input
          {...rest}
          className='w-full p-2.5 ml-2 bg-transparent outline-none'
        />
      </div>
    </div>
  );
}
