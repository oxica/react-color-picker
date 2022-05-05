function ColorPicker(options) {
  return (
    <div className="ColoPicker">
      <h2 className="ColorPicker__title">Color Picker</h2>
      <div>
        {options.map((option) => (
          <span className="ColorPicker_option">{option.label}</span>
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;
