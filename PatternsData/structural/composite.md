# الگوی Composite (الگوی ترکیبی)

### همچنین شناخته شده به عنوان:
- الگوی ساختاری (Structural Pattern)

### انگیزه (Motivation):
الگوی Composite استفاده می‌شود وقتی که بخواهیم اشیاء را به صورت سلسله‌مراتبی و ساختاری درختی سازماندهی کنیم. این الگو به ما امکان می‌دهد تا اشیاء فرد را به صورت گروه‌بندی شده و به عنوان یک واحد استفاده کنیم.

### قابلیت استفاده (Applicability):
الگوی Composite وقتی مناسب است که:
- بخواهیم سلسله‌مراتبی از اشیاء را به صورت درختی سازماندهی کنیم.
- بخواهیم به اشیاء فردی و گروهی به یکنواختی دسترسی داشته باشیم.
- بخواهیم با استفاده از واحد یکپارچه، به صورت بازگشتی بر روی ساختار درختی عملیات انجام دهیم.

### ساختار (Structure):
الگوی Composite شامل موارد زیر است:
- `Component`: رابطی است که برای تعریف عملیات مشترک بین اشیاء فرد و گروهی استفاده می‌شود.
- `Leaf`: شیء فردی است که عملیات مشخصی را انجام می‌دهد.
- `Composite`: گروهی از اشیاء فرد و گروهی است که عملیات مشابه را انجام می‌دهند.
- `Client`: کلاسی است که با استفاده از رابط `Component` با اشیاء فرد و گروهی در تعامل است.

### شرکت‌کنندگان (Participants):
- `Component`: رابطی که برای تعریف عملیات مشترک بین اشیاء فرد و گروهی استفاده می‌شود.
- `Leaf`: شیء فردی که عملیات مشخصی را انجام می‌دهد.
- `Composite`: گروهی از اشیاء فرد و گروهی که عملیات مشابه را انجام می‌دهند.
- `Client`: کلاسی که

با استفاده از رابط `Component` با اشیاء فرد و گروهی در تعامل است.

### همکاری (Collaborations):
- `Client` با استفاده از رابط `Component` با اشیاء فرد و گروهی در تعامل است. وقتی یک درخواست به یک `Component` ارسال می‌شود، آن `Component` به تمامی زیرمجموعه‌های خود نیز درخواست را ارسال می‌کند.

### پیامدها (Consequences):
استفاده از الگوی Composite دارای مزایا و معایب زیر است:
- **مزایا**:
    - امکان ساختاردهی سلسله‌مراتبی و سازماندهی درختی اشیاء.
    - امکان استفاده یکنواخت از اشیاء فرد و گروهی.
    - کد قابلیت توسعه و تغییر را دارد و به اضافه کردن نوع جدیدی از اشیاء نیازی به تغییر در کد موجود نیست.
- **معایب**:
    - ممکن است باعث ایجاد اشیاء خالص و گروهی بیشتر شود و برخی از عملیات‌ها معنایی برای برخی از اشیاء نداشته باشد.

### پیاده‌سازی (Implementation):
در زبان برنامه‌نویسی C#، می‌توانیم الگوی Composite را به صورت زیر پیاده‌سازی کنیم:

```csharp
// Component
public abstract class Component
{
    protected string name;

    public Component(string name)
    {
        this.name = name;
    }

    public abstract void Operation();
}

// Leaf
public class Leaf : Component
{
    public Leaf(string name) : base(name)
    {
    }

    public override void Operation()
    {
        Console.WriteLine("Leaf: " + name);
    }
}

// Composite
public class Composite : Component
{
    private List<Component> components = new List<Component>();

    public Composite(string name) : base(name)
    {
    }

    public void AddComponent(Component component)
    {
        components.Add(component);
    }

    public void RemoveComponent(Component component)
    {
        components.Remove(component);
    }

    public override void Operation()
    {
        Console.WriteLine("Composite: " + name);
        foreach (Component component in components)
        {
            component.Operation();
        }
    }
}

// Client
public class Client
{
    private Component root;

    public Client(Component root)
    {
        this.root = root;
    }

    public void ExecuteOperation()
    {
        root.Operation();
    }
}
```

### استفاده‌های شناخته شده (Known Uses):
استفاده از الگوی Composite در فریمورک‌ها و کتابخانه‌های بسیاری وجود دارد، از جمله واسط‌های گرافیکی کاربر (GUI) که اشیاء را در ساختارهای سلسله‌مراتبی و درختی مدیریت می‌کنند.

### الگوهای مرتبط (Related Patterns):
- **Decorator Pattern**: Decorator Pattern به ما امکان می‌دهد تا عملکرد اشیاء را در زمان اجرا تغییر دهیم. در حالی که Composite Pattern روی ساختار اشیاء تأکید دارد و تمرکز بر ساختار درختی دارد.
- **Iterator Pattern**: Iterator Pattern روی مجموعه‌ای از اشیاء حرکت می‌کند، در حالی که Composite Pattern روی ساختار سلسله‌مراتبی اشیاء تأکید دارد. Iterator Pattern می‌تواند برای عبور از ساختار Composite استفاده شود.