# A generic user settings modal for React Native

Easily integrate a user preference modal in your React Native applications with MayoSettingsModal, now supporting multiple independent modal instances.

## 🚀 Installation

```Bash
npm install mayo-settings
# OR
yarn add mayo-settings
```


## 📖 Usage

### Wrapping your app with MayoSettingsProvider

First, wrap your application with __MayoSettingsProvider__. This provides the necessary context for managing multiple MayoSettingsModal instances.

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
  const { openModal, closeModal } = useMayoSettings();

  return (
    <>
      <Button onPress={() => openModal("settingsModalId")} title="Open Settings" />

      <MayoSettingsModal
        id="settingsModalId"
        onClose={() => closeModal("settingsModalId")}
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
| id   | boolean  | A unique identifier for the modal instance.                   |
| onClose   | function | Callback function when closing the modal.             |
| onLogout  | function | Callback function when the logout action is triggered.|
| config    | object   | Configuration object for additional modal settings.   |


For the __`config`__ object:

| Property Name     | Type   | Description                              |
|-------------------|--------|------------------------------------------|
| headerTitle       | string | Title text for the modal header.         |
| logoutButtonText  | string | Text for the logout action button.       |
| showFooter  | boolean | Shows of not the footer with the logout button       |



##  🔍 API

### `MayoSettingsModal`

| Prop | Type | Description |
|:--------:|:--------:|:--------:|
| onLogout  | function  | Callback to handle logout logic.  |
| children  | ReactNode  | Children components for your settings.  |
| config  | object (optional)  | Configuration for the modal.  |


### `useMayoSettings`

Hook to manage user preferences.

- __`openModal(id: string)`__: Opens a modal by its unique ID.
- __`closeModal(id: string)`__: Closes a modal by its unique ID.


## 📚 License

This project is licensed under the MIT License.

