# A generic user settings modal for React Native

Easily integrate a user preference modal in your React Native applications with MayoSettingsModal.

## 🚀 Installation

```Bash
npm install mayo-settings
# OR
yarn add mayo-settings
```


## 📖 Usage

### Wrapping your app with MayoSettingsProvider

First, wrap your application with MayoSettingsProvider. This provides the necessary context for MayoSettingsModal.

```JSX
import { MayoSettingsProvider } from 'mayo-settings';

function App() {
  return (
    <MayoSettingsProvider>
      {/* Rest of your app components */}
    </MayoSettingsProvider>
  );
}
```


### Using MayoSettingsModal in your component

Here's how you can use the MayoSettingsModal in your component:

```JSX
import { MayoSettingsModal, useMayoSettings } from 'mayo-settings';

function SettingsComponent() {
  const { handleOpenMayoSettings } = useMayoSettings();

  return (
    <>
      <Button onPress={handleOpenMayoSettings} title="Open Settings" />

      <MayoSettingsModal
        visible={isMayoSettingsOpen}
        onClose={handleCloseMayoSettings}
        onLogout={handleLogout}
        config={{
          headerTitle: 'Custom Settings',
          logoutButtonText: 'Custom Logout',
        }}
      >
        {/* Your custom settings go here */}
      </MayoSettingsModal>
    </>
  );
}
```

## 🛠️ Props and Configuration

Here are some of the available props and configuration options you can pass to __`MayoSettingsModal`__:

| Prop Name | Type     | Description                                          |
|-----------|----------|------------------------------------------------------|
| visible   | boolean  | Determines if the modal is visible.                   |
| onClose   | function | Callback function when closing the modal.             |
| onLogout  | function | Callback function when the logout action is triggered.|
| config    | object   | Configuration object for additional modal settings.   |


For the __`config`__ object:

| Property Name     | Type   | Description                              |
|-------------------|--------|------------------------------------------|
| headerTitle       | string | Title text for the modal header.         |
| logoutButtonText  | string | Text for the logout action button.       |



##  🔍 API

### `MayoSettingsModal`

| Prop | Type | Description |
|:--------:|:--------:|:--------:|
| onLogout  | function  | Callback to handle logout logic.  |
| children  | ReactNode  | Children components for your settings.  |
| config  | object (optional)  | Configuration for the modal.  |


### `useMayoSettings`

Hook to manage user preferences.

- __`handleOpenMayoSettings()`__: Opens the user preference modal.
- __`handleCloseMayoSettings()`__: Closes the user preference modal.


## 📚 License

This project is licensed under the MIT License.

