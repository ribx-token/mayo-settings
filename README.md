# A generic user settings modal for React Native

Easily integrate a user preference modal in your React Native applications with MayoSettingsModal.

## 🚀 Installation

```Bash
npm install mayo-settings-modal
# OR
yarn add mayo-settings-modal
```

## 📖 Usage

Wrapping your app with MayoSettingsProvider
First, wrap your application with MayoSettingsProvider. This provides the necessary context for MayoSettingsModal.

```Typescript
import { MayoSettingsProvider } from 'mayo-settings-modal';

function App() {
  return (
    <MayoSettingsProvider>
      {/* Rest of your app components */}
    </MayoSettingsProvider>
  );
}
```

### Using MayoSettingsModal in your component

Here's how you can use the MayoSettingsModal in your component:

```Typescript
import { MayoSettingsModal, useUserPreference } from 'mayo-settings-modal';

function SettingsComponent() {
  const { handleOpenUserPreference } = useUserPreference();

  return (
    <>
      <Button onPress={handleOpenUserPreference} title="Open Settings" />

      <MayoSettingsModal onLogout={() => {
        // Handle logout logic here
      }}>
        {/* Your custom settings go here */}
      </MayoSettingsModal>
    </>
  );
}
```


## 🔍 API

### `MayoSettingsModal`

| Prop | Type | Description |
|:--------:|:--------:|:--------:|
| onLogout  | function  | Callback to handle logout logic.  |
| children  | ReactNode  | Children components for your settings.  |
| config  | object (optional)  | Configuration for the modal.  |


### `useUserPreference`

Hook to manage user preferences.

- `__handleOpenUserPreference()__`: Opens the user preference modal.
- `__handleCloseUserPreference()__`: Closes the user preference modal.


## 📚 License

This project is licensed under the MIT License.

